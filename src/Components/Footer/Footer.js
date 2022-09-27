import React from 'react'
import styled from 'styled-components'
import {FaTwitter, FaDiscord,FaInstagramSquare} from 'react-icons/fa';
function Footer() {
    return (
        <StyledFooter>
            <div className='Social'>
                <a href="#"><FaTwitter className='SocialLogo twt' size={25}/></a>
                <a href="#"><FaDiscord className='SocialLogo dsc' size={25}/></a>
                <a href="#"><FaInstagramSquare className='SocialLogo ins' size={25}/></a>
            </div>

            <div className='copyright'>
            <p>© 2022. All rights reserved. </p>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
     border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(280deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%) 1;
   border-bottom:0;
   border-left:0;
   border-right:0;
   padding : 20px 6%;
   display: flex;
   flex-direction : row;
   align-items : center;
   justify-content : space-between;
   background :rgba(47,47,81, 0.2);
   backdrop-filter: blur(3px);
   font-family: 'Nunito Sans', sans-serif;
   width  :100%;
    
  
 
   .Social{
       display : flex;
       align-items : center;
       justify-content : center;
   }
   .SocialLogo{
       color :white;
       transition: 0.3s ease-in-out;
   }
   .SocialLogo:first-child{
       margin-right : 10px;
   }
   .twt:hover{
    color :#2aa9e0;
   }
   .dsc:hover{
    color : rgba(86,98,246);
   }
   .ins:hover{
    color : #bc2a8d
   }
   
   p{
       color : white;
   }
   .author{
       color : white;
   }
   .hk{
       width : 18px;
   }
   .copyright{
       display : flex;
       flex-direction : row;
       justify-content : right;
       align-items  :center;
       width :33.33%;
   }
   .copyright p{
       margin-right  :10px;
   }
   @media (max-width: 768px) {
    flex-direction : column;
    .copyright{
        width :100%;
        justify-content : center;
    }
    .copyright p{
        font-size: 12px;
    }
    .Social{
        margin-bottom : 10px;
   }
    }
`

export default Footer
