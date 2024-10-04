import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
    <h2> How to play dice game </h2>
    <div className='text'>
        <p> Select any number </p>
        <p> Click on dice image </p>
        <p> After click on dice if selected number and dice number is same you get the same point as dice{""} </p>
        <p> If the dice number and selected number will not match, 2 points will be detected from the score. </p>
    </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
background-color  : #FBF1F1;
padding: 20px;
margin-top: 20px;

h2 {
    font-size: 24px;
}

.text {
   margin-top : 24px;
}
`;
