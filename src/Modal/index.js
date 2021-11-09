import React from 'react'
import ReactDOM  from 'react-dom'
import styled from 'styled-components'

const ModalStyled = styled.div `
    background-color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 3;
    flex-direction: column;
    color: #b8bbca;

    h2 {
        text-transform: uppercase;
        
       
    }
    .cerrar {
        
        font-size: 50px;
        margin: 0;
        

        &:hover {
            cursor:pointer;
            color: red;

        }  
    }
        
        
    
    
   
`

function Modal({setOpenModal}){
   
    const handleClick = ()=>{
        setOpenModal(prevState => !prevState)

    }
    
    return ReactDOM.createPortal(
        <ModalStyled>
            <h2>Reglas</h2>
            <img src="./images/image-rules.svg" alt="Reglas de juego" />
            <p onClick={handleClick} className="cerrar">X</p>
        </ModalStyled>
        ,
        document.getElementById('modal')
    )
}

export {Modal}