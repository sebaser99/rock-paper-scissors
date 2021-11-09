import React from 'react'
import styled from 'styled-components'

const FichaStyled = styled.div `
    width: 130px;
    height: 125px;
    border: ${({name}) => (name === '') ? '0' : '16px' } solid ${({color}) => color.base};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center; 
    padding: ${({name}) => (name === '') ? '16px' : '0' };
    background: ${({name}) => (name === '') ? 'transparent' : 'white' };
    box-sizing: border-box;
    box-shadow: 0 5px 0 ${({color}) => color.border};
    cursor: pointer;
    position:relative;
    z-index:2;
    box-shadow: 0 0 0 40px rgba(255, 255, 255, .075), 0 0 0 80px rgba(255, 255, 255, .05), 0 0 0 120px rgba(255, 255, 255, .02);
    

    &:active{
        transform: scale(.9)
    }

    .box{
        flex:1;
        align-self: stretch;
        border-radius: 50%;
        box-shadow: 0 -4px 0  ${({name}) => (name === '') ? 'transparent' : '#bcc1d5' };;
        display: flex;
        align-items: center;
        justify-content: center;
        background:  ${({name}) => (name === '') ? '#122343' : 'transparent' };;
    }

    @media screen and (min-width: 768px){
        width: 170px;
        height: 165px;
    }
    `

    const colors = { 
       
        paper: {
            base: '#516ef4',
            border:'#2543c3'
            
        },
        scissors: {
            base: '#eca81e',
            border:'#c76c14'
        },
        rock: {
            base: '#de3a5a',
            border:'#980e31'
        },
        default:{
            base: 'transparent',
            border: 'transparent'
        }
    };

function Ficha({name= '', onClick}){
    const color = colors[name] ? colors[name] : colors.default
    function handleClick(){
        if(onClick){
            onClick(name)
        }           
    }
        return (
        <FichaStyled color={color} onClick={handleClick} name={name}>
            <div className="box" >
            <img src={`./images/icon-${name}.svg`} alt="" />
            </div>
        </FichaStyled>

    )
}

export {Ficha}