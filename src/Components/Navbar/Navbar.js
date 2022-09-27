import React, { useState ,useContext } from 'react';
import styled from 'styled-components'
import Logo from '../../Media/Logos/Logo_.png'
import {FaWallet} from 'react-icons/fa';
//HumbergerCss
import './HumbergerStyled.css'
//Scroll On Click
import { Link } from 'react-scroll'
import {Link as Link_} from 'react-router-dom'
//Context
import { StateContext } from '../../Contexts/StateContext';

function Navbar({show}) {
  const {HandleConnectWallet,currentAccount} = useContext(StateContext); 
    //Toggle Mobile Menu
    const [toggle ,setToggle]= useState(false);
    
  return (
    <StyledNav>

    <Link_ to='/' className='Logo'>
    <StyledLogo src={Logo}/>
    </Link_>

    {
      show? 
      <StyledMenu>
      <li>
      <Link 
      style={{cursor:'pointer'}}
      spy={true}
      smooth={true}
      offset={-90}
      duration={200}
      to='About'>STORY</Link>
     </li>  

     <li>
      <Link 
      style={{cursor:'pointer'}}
      spy={true}
      smooth={true}
      offset={-90}
      duration={200}
      to='RoadMap'>RoadMap</Link>
     </li>  

     <li>
      <Link 
      style={{cursor:'pointer'}}
      spy={true}
      smooth={true}
      offset={-90}
      duration={200}
      to='faq'>faq</Link>
     </li> 

      <li>
      <Link 
      style={{cursor:'pointer'}}
      spy={true}
      smooth={true}
      offset={-120}
      duration={200}
      to='WhiteList'>Whitelist</Link>
     </li>  
      </StyledMenu>
      :''
    }


    <StyledConnectButton
            onClick={()=>{HandleConnectWallet()}}
            >
              {currentAccount? `Connected ...${currentAccount.slice(-4)}` : 'Connect Wallet'}
            <FaWallet size={20} style={{marginLeft: '10px'}}/>
    </StyledConnectButton>

      <div 
      onClick={()=>{
          setToggle(!toggle);
      }} 
      id="nav-icon3"
      className={`${toggle ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>




      <StyledMobileMenu 
      style={{transform : toggle? 'translateX(0%)' : 'translateX(200%)'}}
      >
        <li>
         <Link 
         onClick={()=>{setToggle(false)}}
         style={{cursor:'pointer'}}
         spy={true}
         smooth={true}
         offset={-90}
         duration={200}
         to='About'>STORY</Link>
        </li>  
 
        <li>
         <Link 
         onClick={()=>{setToggle(false)}}
         style={{cursor:'pointer'}}
         spy={true}
         smooth={true}
         offset={-90}
         duration={200}
         to='RoadMap'>RoadMap</Link>
        </li>  
 
        <li>
         <Link 
         onClick={()=>{setToggle(false)}}
         style={{cursor:'pointer'}}
         spy={true}
         smooth={true}
         offset={-90}
         duration={200}
         to='faq'>faq</Link>
        </li> 
 
         <li>
         <Link 
         onClick={()=>{setToggle(false)}}
         style={{cursor:'pointer'}}
         spy={true}
         smooth={true}
         offset={-120}
         duration={200}
         to='WhiteList'>Whitelist</Link>
        </li>  
      </StyledMobileMenu>



</StyledNav>
  )
}
const NavItem = ({title, ClassProps}) =>{
    return (
       <li>
        <Link 
        style={{cursor:'pointer'}}
        spy={true}
        smooth={true}
        offset={-90}
        duration={200}
        to={title}>{title}</Link>
       </li>  
    );
}



const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 64px;
  display: flex;
  align-items :center;
  justify-content :space-between;
  padding :0px 6%;
  background:rgba( 51, 24, 75, 0.3 );
  border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(280deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%) 1;
   border-top:0;
   border-left:0;
   border-right:0;
  backdrop-filter: blur( 10px );
  -webkit-backdrop-filter: blur( 6px );

  z-index : 999;

  a{
    z-index :2;
    text-decoration : none;
  }
  .Logo{
      z-index :1;
  }

`

const StyledLogo = styled.img`
  height : 80px;
  cursor : pointer;

  @media (max-width :768px){
    height : 50px;
  }

`

const StyledMenu = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index :2;

    li{
        display: inline-block;
        cursor : pointer;
    }
    li a{
    text-decoration: none;
    color :white;
    transition: 0.3s ease-in-out;
    font-family: 'Nunito Sans', sans-serif;
    padding: 8px;
    font-size: 18px;
    text-transform: uppercase;
    }

    li a:hover{
    color:  var(--MainColor);
    text-shadow:
    0 0 40px rgba( 241, 4, 148, 0.8 ),
    0 0 80px rgba( 241, 4, 148, 1 );
    }
    @media (max-width: 768px) {
    display: none;
    }
`

const StyledMobileMenu = styled.div`
width : 80vw;
height : 100vh;
position : relative;
display : flex;
flex-direction :column;
justify-content : center;
align-items : center;
position : absolute;
top : 0;
right :0;
transition: transform 0.3s ease-in-out;
/* From https://css.glass */
background: rgba( 41, 22, 72, 0.98 );
border-left: 1px solid rgba( 255, 255, 255, 0.07 );
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
backdrop-filter: blur(6px);
-webkit-backdrop-filter: blur(6px);
z-index :3;



ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
}

    li{
        display: inline-block;
        padding : 6px;
    }
    li a{
        text-decoration: none;
    color :white;
    transition: 0.3s ease-in-out;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 25px;
    text-transform: uppercase;
    }

    li a:hover{
        color : var(--MainColor);
    }

`

const StyledConnectButton = styled.button`

   background-color : var(--MainColor);
   padding : 0 10px;
   z-index: 99;
   color : white;
   border-radius : 5px;
   border : none;
   height : 40px;
   cursor : pointer;
   font-family: 'Ubuntu';
   font-Size : 15px;
   transition: 0.3s ease-in-out;
   text-transform : uppercase;
   display : flex;
   justify-content : center;
   align-items : center;
   border : 1px solid var(--MainColor);
   &:hover{
   border : 1px solid var(--MainColor);
   box-shadow:
    0 0 40px rgba( 241, 4, 148, 0.65 ),
    0 0 80px rgba( 241, 4, 148, 0.3 );
   }
   @media (max-width: 768px) {
    display: none;
    }
`

export default Navbar;
