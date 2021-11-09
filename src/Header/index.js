import React from 'react'
import styled from 'styled-components'
import {Score} from '../Score'

const HeaderStyled = styled.div `
        border: 3px solid rgba(255, 255, 255, .25);
        color: white;
        padding: 12px 12px 12px 23px;
        border-radius: .5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        

        h1{
            font-size: 18px;
            text-transform: uppercase;
            line-height: 19px;
            font-weight: 700;
            margin: 0;
        }
    `

function Header(){
        return (
        <HeaderStyled>
            <h1>Rock <br/> Paper <br/> Scissors</h1>
            <Score />
        </HeaderStyled>

    )
}

export {Header}