import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.div `
    display: inline-flex;
    color: white;
    border: 1px solid rgba(255, 255, 255, .25);
    background: transparent;
    min-width: 128px;
    border-radius: .5em;
    box-sizing: border-box;
    justify-content: center;
    padding: 1em;
    cursor: pointer;

    &:hover {
        background: white;
        color: #131537;
    }
    

`
export const  WhiteButton = styled(ButtonStyled) `
        background: white;
        color: #131537;
    `
function Button({children, ...props}){
        
    return(
        <ButtonStyled {...props}>
            {children}
        </ButtonStyled>

    )

    
}

export {Button}