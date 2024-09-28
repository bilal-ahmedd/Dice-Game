import React from 'react'
import styled from 'styled-components'

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

const Button = styled.button`
background-color: #000;
color: #fff;
padding: 10px 28px;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
transition: 0.3s background ease-in;

&:hover {
    background-color: transparent;
    color: #000;
    border: 2px solid #000;
    transition: 0.3s background ease-in;
}
`;

export default StartGame
