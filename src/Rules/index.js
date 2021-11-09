import React from 'react'
import styled from 'styled-components'
import {Button} from '../Button'

const RulesStyled = styled.div `
    text-align: center;

`

function Rules({setOpenModal}){
    const handleClick = ()=>{
        setOpenModal(prevState => !prevState)

    }
    return(
        <RulesStyled>
            <Button onClick={handleClick}>
                Rules
            </Button> 
        </RulesStyled>

    )
}

export {Rules}