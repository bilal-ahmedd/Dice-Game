import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from "styled-components";

const GamePlay = () => {
  return (
    <MainContainer>
        <div className='top_sec'>
        <TotalScore/>
        <NumberSelector/>
        </div>
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

