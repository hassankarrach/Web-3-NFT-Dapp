import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import {Link} from 'react-router-dom'


//Media
import Hero from '../../Media/Header/Hero.jpg'
import Main from '../../Media/Header/Main.png'

function Header() {
    return (
        <StyledHeader>
            <motion.div
            className='ImgHolder'
            animate ={{y:-20}}
            transition={{ ease: "linear", duration: 2, yoyo :Infinity }}
            >
            <img 
            className='Main' src={Main}></img>
            <div id="overlay"></div>
            </motion.div>

            <div
            className='Data'
            >
            <h1>ABUNDEEZ</h1>
            <p>
            10.000 Abundeez from the 5th dimension Fell from the sky right on our Blockchain.
            </p>
            <div className='Buttons'>
               <Link to='/WhitePaper'>
               <button className='About'>White Paper</button>
               </Link>

               <Link to='/Mint'>
               <button className='Mint'>Mint</button>
               </Link>

            </div>
            </div>
           
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
  width : 100%;
  height : 100vh;
  display: flex;
  justify-content : space-between;
  align-items : center;
  flex-direction :row-reverse;
  background-image: url(${Hero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color : white;
  padding : 0px 6%;
  overflow:hidden;
  h1{
    font-family: var(--font-secondary);
  }
  p{
    font-family: 'Shadows Into Light Two', cursive;
    font-size : 22px;
  }

  .Main{
      width : 450px;
      margin-bottom : 20%;

      @media (max-width : 768px){
          width : 300px;
      }
  }
  .ImgHolder{
  }

  .Data{
  }

  .Buttons{
      margin-top : 30px;
  }
  .Buttons button{
      padding : 10px 15px;
      cursor:pointer;
      text-transform : uppercase;
      font-family: var(--font-primary);
      font-size : 0.95rem;
      border-radius :5px;
  }

  .Buttons .About{
      margin-right :10px;
      background: transparent;
      border: 1px solid white;
      color: white;
  }
  .Buttons .Mint{
      background-color :var(--MainColor);
      border: 2px solid var(--MainColor);
      color : white;
      transition: 0.3s ease-in-out;
      &:hover{
        box-shadow:
    0 0 40px rgba( 241, 4, 148, 0.65 ),
    0 0 120px rgba( 241, 4, 148, 0.3 );
      }
  }


  @media (max-width: 768px) {
    flex-direction : column;

    .ImgHolder{
      margin-top :80%;
  }
  .Data{
      position: absolute;
      padding : 0px 6%;
      bottom: 10%;
      text-align : center;
  }
  .Buttons button{
     font-size :0.85rem;
     padding : 8px 10px;
  }
  .Buttons button:first-child{
      margin-right :8px;
  }
    }

`

export default Header
