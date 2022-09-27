import React from 'react'
import styled from 'styled-components';

function TItle({title}) {
  return (
       <StyledTitle>
          <h1>{title}</h1>
      </StyledTitle>
  )
}


const StyledTitle = styled.div`
display : flex;
justify-content : center;
align-items : center;
font-family: 'Poppins', sans-serif;
color : white;
width : 100%;
height :  100px;
h1{
  font-size : 2rem;
}

@media (max-width: 768px) {
      h1{
        font-size : 1.4rem;
      }
    }
`

export default TItle;