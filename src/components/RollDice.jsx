import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice, rollDice}) => {

  return (
    <DiceContainer>
        <div className='dice' onClick={rollDice}>
            <img src={`src/assets/dice/dice_${currentDice}.png`} alt="" />
            <p> Click on Dice to roll </p>
        </div>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 48px;

    .dice {
        cursor: pointer;

    }

    p {
        font-weight: bold;
        font-size: 24px;
    }
`;
