import React, {useState, useContext}from 'react'
import styled from 'styled-components'
import {Ficha} from '../Ficha'
import {WhiteButton} from '../Button'
import { ScoreContext } from '../App'

const TableStyled = styled.div `
    display: grid;
    grid-template-columns: 130px 130px;
    justify-content: center;
    grid-column-gap: 30px;
    grid-row-gap: 11.5px;
    justify-items: center;
    margin: 1.5rem 0;
    position: relative;

    & div:nth-of-type(3){
        grid-column: span 2;
    }
    .linea {
        width: 150px;
        position: absolute;
        height: 14px;
        background-color: rgba(0,0,0, .2);
        top: 58px;
          

        &:before {
            content: "";
            position: absolute;
            height: 14px;
            background-color: rgba(0,0,0, .2);
            top: 0;
            left: 0; 
            right: 0;
            transform: rotate(58deg);
            transform-origin: top left;

        }
        &:after {
            content: "";
            position: absolute;
            height: 14px;
            background-color: rgba(0,0,0, .2);
            top: 0;
            left: 0; 
            right: 0;
            transform: rotate(-58deg);
            transform-origin: top right;

        }
    }

    .pick-container {
        text-align:center;
        color: white;
        text-transform: uppercase;
        font-size: .8rem;
        font-weight: 700;
        letter-spacing: 1px;
    }
    .restart {
        color: white;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        p {
            font-size: 3rem;
            
            margin:  1.2rem;
        }
    }

    @media screen and (min-width: 768px){
        grid-column-gap: 100px;
        grid-row-gap: 5px;

        .linea {
        width: 260px;
        }
    }
    `
    

function Table(){
    const [playing, setPlaying] = useState(false)
    const [pick, setPick] = useState('')
    const [housePick, setHousePick] = useState('')
    const [resultGame, setResultGame] = useState('')
    const {score, setScore} = useContext(ScoreContext)
    

    const pickOption = [
        "paper", 
        "scissors", 
        "rock"
    ]
    function launchHousePick(){
        return new Promise((resolve, reject)=>{
            let house;
            const interval = setInterval(()=>{
                house = pickOption[getRandomInt(0,3)]
                setHousePick(house)
            },100)
            setTimeout(()=>{
                clearInterval(interval)
                resolve(house)
            }, 2000)
        })

        
    }

    function gameIA(name, house){
        if(name === house){
            return "Empate"
        }else if(name === "paper"){
            if(house === "rock"){
                return "Ganaste"
            }else if(house === "scissors"){
                return "Perdiste"
            }
        }else if(name === "rock"){
            if(house === "scissors"){
                return "Ganaste"
            }else if(house === "paper"){
                return "Perdiste"
            }
        }else if(name === "scissors"){
            if(house === "paper"){
                return "Ganaste"
            }else if(house === "rock"){
                return "Perdiste"
            }
        }
    }
 
    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const onClick = async (name)=>{
        setPlaying(true)
        setPick(name)
        const house = await launchHousePick()
        const results = gameIA(name, house)
        setResultGame(results)
        if(results === "Ganaste"){
            setScore(score + 1);
         
           
        }
        
    }
    const restartGame = (()=>{
        setPlaying(false)
        setResultGame('')
        
        
    })

    

        return (
        <TableStyled>
            
            {(!playing ? (
                <>
                    <label className="linea"></label>
                    <Ficha name="paper" onClick={onClick}/>
                    <Ficha name="scissors" onClick={onClick}/>
                    <Ficha name="rock" onClick={onClick} />
                </>

            )
            :(
                <>
                    <div className="pick-container">
                        <Ficha name={pick} isShadowAnimated={(resultGame === "Ganaste")}/> 
                        <p>Elegiste</p>
                    </div>
                    <div className="pick-container">
                        <Ficha name={housePick} isShadowAnimated={(resultGame === "Perdiste")} /> 
                        <p>La máquina Eligió</p>
                    </div>
                    <div className="restart">
                        {
                            (resultGame &&(
                                <>
                                <p>{resultGame}</p>
                                  <WhiteButton onClick={restartGame}>
                                    Juega de Nuevo porfa
                                </WhiteButton>
                                </>
                            ))
                        }
                        
                       
                    </div>
                </>
            ))}
            
            
        </TableStyled>

    )
}

export {Table}