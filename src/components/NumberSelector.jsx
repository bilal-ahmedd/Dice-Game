import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({setError ,error ,selectNumber, setSelectNumber}) => {

    const arrayNumber = [ 1,2,3,4,5,6 ]

    const removeError = (value) => {
        
        setSelectNumber(value);
        setError("");
    }

  return (
    <MainContainer>
        <p className='error'> {error}</p>
    <div className='flex'>
        {arrayNumber.map((value, i ) => (
            
        <Box isSelected={value === selectNumber} 
        key={i} 
        onClick={()=> removeError(value)}>
        {value}
        </Box>      
        ))}
    </div>
    <p> Selected Number </p>
    </MainContainer>
  )
}

export default NumberSelector

const MainContainer = styled.div`
    .flex {
        display: flex;
        gap: 24px;
        padding-top: 40px;
    }

    .error {
        font-weight: 500;
        color: red;
        font-size: 18px;
    }

    p {
        font-size: 24px;
        font-weight: 600;
        text-align: end;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    background-color: ${({ isSelected }) => (isSelected ? "black" : "white")};
    color: ${({ isSelected }) => (!isSelected ? "black" : "white")};
    cursor: pointer;
`
