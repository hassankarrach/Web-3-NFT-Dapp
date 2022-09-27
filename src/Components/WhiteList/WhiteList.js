import React from 'react'
import styled from 'styled-components'
import Countdown from 'react-countdown';
import {Link} from 'react-router-dom'

import Main from '../../Media/WhiteList/Main.png'
import Bg from '../../Media/WhiteList/bgCard.jpg'

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <p>completed</p>;
    } else {
      // Render a countdown
      return <StyledCounter>
        <div className='Holder'>
          <div className='CountHolder'>
          <h2>{days}</h2>
          </div>
          <h2 className='date_'>Day</h2>
        </div>
  
        <div className='Holder'>
          <div className='CountHolder'>
          <h2>{hours}</h2>
          </div>
          <h2 className='date_'>Hours</h2>
        </div>
  
        <div className='Holder'>
          <div className='CountHolder'>
          <h2>{minutes}</h2>
          </div>
          <h2 className='date_'>Minutes</h2>
        </div>
  
        <div className='Holder'>
          <div className='CountHolder'>
          <h2>{seconds}</h2>
          </div>
          <h2 className='date_'>Seconds</h2>
        </div>
        </StyledCounter>;
    }
  };

function WhiteList() {
  return (
    <StyledWhiteList id='WhiteList'>
        <div className='Left'>
           <div className='Data'>
            <h2>Whitelist is Live now!</h2>
            <p>Countdown to whitelist registration :</p>
           </div>

           <div className='CounterHolder'>
           <Countdown date={'2022-06-21T01:02:03'}
           renderer={renderer}
           >
           </Countdown>
           </div>

           <div className='Btn'>
               <Link to='/Whitelist'>
               <button>Whitelist Me</button>
               </Link>
           </div>
        </div>

        <div className='Right'>
            <img src={Main}/>
        </div>
    </StyledWhiteList>
  )
}


const StyledWhiteList = styled.div` 
height : 300px;
background-color : white;
color : black;
border-radius : 10px;
margin : 40px 6%;
display : flex;
justify-content : space-between;
align-items : center;
position : relative;
color : white;
background-image: url(${Bg});
background-position : center;
background-size : cover;
backdrop-filter: blur(3px );
background-position : center;
background-size : cover;
text-align : center;
border :  1px solid rgba( 255, 255, 255, 0.05 );




@media (max-width: 768px) {
      height :400px;
      flex-direction : row;
      justify-content :center;
    }


.Left{
    margin-left : 40px;
    @media (max-width: 768px) {
        margin-left : 0px;
    }
    h2{
        font-family: 'Poppins', sans-serif;
        font-size : 2rem;
    }
    p{
        font-family: 'Nunito Sans', sans-serif;
        font-size : 1.3rem; 
        opacity : 0.8;
    }

    .Btn{
        width : 100%;
        button{
            padding : 5px 15px;
            font-family: 'Poppins', sans-serif;
            background-color : var(--MainColor);
            border  :none;
            color : white;
            border-radius : 5px;
            font-size : 1.4rem;
            width : 100%;
            cursor : pointer;
            margin-top : 30px;
            transition : 0.2s ease-in-out;
            &:hover{
                box-shadow:
                 0 0 40px rgba( 241, 4, 148, 0.65 ),
                 0 0 80px rgba( 241, 4, 148, 0.3 );
            }
        }
    }
}


.Right{
    img{
        height : 330px;
        position : absolute;
        right :-30px;
        bottom:0;
    }
    @media (max-width: 768px) {
      display : none;
    }
}
`



const StyledCounter = styled.div`
color :white;
display :flex;
flex-direction :row;


.Holder{
  display: flex;
  flex-direction :column;
  justify-content: space-between;
  align-items : center;
  width :100%;
  .date_{
    font-family: 'Poppins', sans-serif;
    text-transform : uppercase;
    font-size : 15px;
    margin-top :4px;
    color: white;
    @media (max-width: 768px) {
      font-size : 10px;
    }
  }

  .CountHolder{
  width :70px;
  height:70px;
  background : transparent;
  border : 1px solid var(--MainColor);
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content : center;
  align-items :center;
  margin-top : 20px;

  @media (max-width: 768px) {
    width :50px;
  height:50px;
    }

  h2{
    font-family: 'Poppins', sans-serif;
    font-size : 30px;
  }
  }
}
`

export default WhiteList