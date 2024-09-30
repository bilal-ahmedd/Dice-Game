import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from "styled-components";
import RollDice from './RollDice';
import { useState } from 'react';

const GamePlay = () => {
  
  const [score, setScore] = useState(0);
  const[selectNumber, setSelectNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const generateNumber = (min, max)=> {
    return Math.floor(Math.random() * (max - min)   + min);
  }
  
  const rollDice = ()=> {
    if ( !selectNumber ){
      setError(" You have not select the number"); 
      return;
      }

      setError("");
    
    const randomNumber = generateNumber(1,7);
      setCurrentDice((prev) => randomNumber);


      if(selectNumber === randomNumber) {
        setScore(prev => prev + randomNumber)
      }else {
        setScore(prev => prev - 2)
      }
      setSelectNumber(undefined)
  }
  return (
    <MainContainer>
        <div className='top_sec'>
        <TotalScore score={score} />
        <NumberSelector error={error} setError={setError} selectNumber={selectNumber} setSelectNumber={setSelectNumber} />
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice} />
    </MainContainer>
  )
}

export default GamePlay


const MainContainer = styled.div`
    .top_sec {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

`

