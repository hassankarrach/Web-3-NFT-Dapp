import React from 'react';
import styled from 'styled-components';
import '../Components/Header/Stars.css';
import Logo from '../Media/Logos/LogoLoading.png'
import { motion } from 'framer-motion'

function Loader() {
  return (
    <motion.div
    initial ={{opacity:0}}
    animate= {{opacity:1, transition :{delay: 0.1,duration:1.3}}}
    exit={{ opacity:0 ,transition :{delay: 0.1,duration:0.2}}}
    >
      <StyledLoader>
      <img 
      src={Logo} className='animate-flicker Logo'></img>
      <div id="stars"></div>
      <div id="stars2"></div>
      </StyledLoader>;
    </motion.div>
  )
}

const StyledLoader = styled.div`
  height : 100vh;
  overflow : hidden;
  background : var(--Bg);
  p {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  position: absolute;
  font-family: 'Regen', sans-serif;
  text-transform: uppercase;
  font-size: 4rem;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(90deg, var(--Bg), #fff, var(--Bg));
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 6s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
}

@keyframes flickerAnimation {
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-o-keyframes flickerAnimation{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-moz-keyframes flickerAnimation{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-webkit-keyframes flickerAnimation{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
.animate-flicker {
   -webkit-animation: flickerAnimation 2s infinite;
   -moz-animation: flickerAnimation 2s infinite;
   -o-animation: flickerAnimation 2s infinite;
    animation: flickerAnimation 2s infinite;
}

.Logo{
    position : absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width : 300px;
    cursor: pointer;
    @media (max-width :768px){
      width : 140px;
    }
  }

@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
}
`



export default Loader;
