import React from 'react'
import styled from 'styled-components'
import Title from '../Title/Title'

function JoinCommunity() {
    return (
        <StyledDiv data-aos="fade-up" data-aos-delay="250">
             <div className='Light'>
             </div>
            <Title title='Join the Community'/>
            <div className='Buttons'>
                <button className='twt'>Twitter</button>
                <button className='dsc'>Discord</button>
            </div>
        </StyledDiv>
    )
}


const StyledDiv = styled.div`
   height : 300px;
   display : flex;
   justify-content : center;
   align-items : center;
   flex-direction : column;
   position : relative;

   
   .Light{
  position :absolute;
  width: 230px;
height: 230px;
background: rgba(145,78,255, 0.9);
filter: blur( 150px );
bottom :0;
right :0;
}

   button{
       width : 100px;
       height : 40px;
       border: none;
       border-radius : 5px;
       cursor : pointer;
       font-family: 'Regen', sans-serif;
       transition: 0.3s ease-in-out;
   }
   .twt{
       margin-right : 10px;
       background-color : #2aa9e0;
       color : white;
   }
   .twt:hover{
    box-shadow:
    0 0 40px rgba(42,169,224,0.65),
    0 0 120px rgba( 42, 169, 224, 0.3 );
   }
   .dsc{
       background-color : rgba(86,98,246);
       color : white;
   }
   .dsc:hover{
    box-shadow:
    0 0 40px rgba(86,98,246,0.65),
    0 0 120px rgba( 86,98,246, 0.3 );
   }
`

export default JoinCommunity
