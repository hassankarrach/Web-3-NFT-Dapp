import React, {useState, useEffect,useContext} from 'react'
import styled from 'styled-components'
import '../Components/Header/Stars.css'
import Countdown from 'react-countdown';
import { motion } from 'framer-motion'
import Navbar from '../Components/Navbar/Navbar'

const WhiteList = ()=> {
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

  return (
    <motion.div
    initial ={{opacity:0}}
    animate= {{opacity:1, transition :{delay: 0.1,duration:1.3}}}
    exit={{ opacity:0 ,transition :{delay: 0.1,duration:0.2}}}
    >
    <Navbar/>
    <StyledWhiteList>
        <div id="stars"></div>
        <div id="stars2"></div>
       <div className='Wrapper'>
       <div className='Data'>
            <h1 style={{marginBottom:'30px'}}>ABUNDEEZ WHITELIST</h1>

            <p
            style={{marginBottom:'15px'}}
            >
            to be whitelisted means your address wallet is allowed for the minting of Abundeez  NFTs on Pre-sale and allows the Abundeez team to reward early supporters with guaranteed slots, Whitelisting also allows supporters to avoid “gas wars”, which is when multiple people try to mint NFTs at the same time, driving up transaction prices.  The pre-approved users on the whitelist are able to spread out their mints in such a way that they are not all transacting at the same time, hence avoiding a sudden spike in transaction prices.
            </p>

        </div>
        <div className='Card'>
           <div className='Top'>
             <h1>END IN</h1>
           </div>

           <div className='CounterHolder'>
           <Countdown date={'2022-06-21T01:02:03'}
           renderer={renderer}
           >
           </Countdown>
           </div>

           <a href='https://discord.gg/4mpueMw5' target='_blank'><button>Apply For whitelist</button></a>
        </div>
       </div>
    </StyledWhiteList>
    </motion.div>
  )
}

const StyledWhiteList = styled.div`
  height: 100vh;
  background: radial-gradient(circle, rgba(49,13,78,1) 0%, rgba(17,7,42,1) 100%);
  overflow: hidden;




  @media (max-width: 768px) {
    padding: 50px 0px;
    overflow : auto;
    #stars, #stars2{
      display:none;
    }
    }

  .Wrapper{
    width:100vw;
    height:100vh;
    display: flex;
    flex-direction: row;
    padding: 0px 6%;
    justify-content:space-between;
    align-items:center;

    @media (max-width: 768px) {
      flex-direction : column;
      padding: 0px 2%;
    }
  }

  .Data{
    color:white; 
    width: 55%;

    @media (max-width: 768px) {
      width: 80%;
    }
    h1{
      font-family: 'Regen', sans-serif;
    }
    p{
      font-family: 'Ubuntu', sans-serif;
    }
  }

  .Card{
    width : 370px;
    height: 350px;
    background: linear-gradient(0deg, rgba(49,13,78,0) 0%, rgba(47,26,81,1) 100%);
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-top: 1px solid rgba( 255, 255, 255, 0.18 );
    border-left: 1px solid rgba( 255, 255, 255, 0.18 );
    border-right: 1px solid rgba( 255, 255, 255, 0.18 );
    border-radius : 10px;
    padding : 0px 10px;
    @media (max-width: 768px) {
      width : auto;
      width: 90%;
      margin-top:30px;
    }

    .Top{
      width : 100%;
      height: 50px;
      border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(280deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%) 1;
   border-bottom:linear-gradient(280deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%) 1;;
   border-left:0;
   border-right:0;
      color : white;
      display: flex;
      justify-content :center;
      align-items :center;
      font-family: 'Ubuntu', sans-serif;
    }
    .CounterHolder{
      height : 200px;
      display: flex;
      justify-content :center;
      align-items :center;
      @media (max-width: 768px) {
      margin-top:30px;
    }
    }

    button{
      width : 350px;
      height: 50px;
      border-radius : 5px;
      border : none;
      bottom: -10px;
      position : absolute;
      left:0;
      right:0;
      margin-left: auto;
      margin-right: auto;
      background : var(--MainColor);
      color : white;
      font-size : 20px;
      text-transform: uppercase;
      font-family: 'Regen', sans-serif;
      cursor : pointer;
      transition: 0.3s ease-in-out;
      @media (max-width: 768px) {
      width : auto;
    }

      &:hover{        box-shadow:
           0 0 40px rgba( 241, 4, 148, 0.65 ),
           0 0 80px rgba( 241, 4, 148, 0.3 );
        }
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
  justify-content: center;
  align-items : center;
  margin : 5px;
  .date_{
    font-family: 'Ubuntu', sans-serif;
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
  background : #371e61;
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content : center;
  align-items :center;
  @media (max-width: 768px) {
      width: 50px;
      height: 50px;
    }
  h2{
    font-family: 'Regen', sans-serif;
    font-size : 30px;
    @media (max-width: 768px) {
      font-size : 25px;
    }
  }
  }
}
`

export default WhiteList