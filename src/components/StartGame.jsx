import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'

const StartGame = ({toggle}) => {
  return (
    <>
      <Container>
        <img src="src/assets/dices.png" alt="" />
        <div className='screen-content'> 
            <h1> Dice Game </h1>
            <Button onClick={toggle} > Play Now </Button>
        </div>
      </Container>
    </>
  )
}

const Container = styled.div`
max-width: 1180px;
height: 100vh;
display: flex;
align-items: center;
margin: 0 auto;

.screen-content {

    h1 {
        font-size: 90px;
        margin: 0;
    }

    button {
        float: right;
    }
}
`;
export default StartGame
