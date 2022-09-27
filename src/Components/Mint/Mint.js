import React from 'react'
import styled from 'styled-components'
import ETH from '../../Media/Logos/Eth.png'
import Gif from '../../Media/Minting/Mint.gif'
import EtherScan from '../../Media/Logos/EtherScan.png'
import OpenSea from '../../Media/Logos/OpenSea.png'
import {Link} from 'react-router-dom'


function Mint() {
  return (
    <StyledMint>
       <div className='Container'>
           <div className='Left'>
           </div>

           <div className='Right'>
               <div className='Top'>
               <h1>Abundeez Mint</h1>
               <p>10.000 Abundeez from the 5th dimension fell from the sky right on our blockchain. Abundeez is unique and programmatically generated with over 80+ possible attributes and traits like backgrounds, clothes, mouth, head (Common & rares).</p>
               </div>

            
               <div className='Info'>
                   <div className='Item'>
                       <h3 className='TT'>Price Pre-Sale</h3>
                       <div className='Price'>
                           <h3>0.08</h3>
                           <img className='Symbole' src={ETH}/>
                       </div>
                       
                   </div>

                   <div className='Item'>
                       <h3 className='TT'>Price Sale</h3>
                       <div className='Price'>
                           <h3>0.11</h3>
                           <img className='Symbole' src={ETH}/>
                       </div>
                   </div>
               </div>

           <div className='MintContainer'>
           <div className='Socials'>
                   <a href='' target='_blank'>
                       <img className='SocialItem' src={OpenSea}/>
                   </a>
                   <a href='' target='_blank'>
                       <img className='SocialItem' src={EtherScan}/>
                   </a>
           </div>

           <Link to='/Mint'>
           <button>
               Mint
           </button>
           </Link>
           </div>
           </div>



       </div>
    </StyledMint>
  )
}


const StyledMint = styled.div`
 display : flex;
 justify-content : center;
 align-items : center;
 margin : 10px;
 height : auto;

 .Container{
     padding : 0px 6%;
     display : flex;
     flex-direction : row;
     align-items : center;
     justify-content : space-evenly;
     position:relative;
     color : white;
     @media (max-width : 768px){
         flex-direction : column;
         padding : 0px;
         width : 90vw;
     }


     .Left{
         width : 300px;
         height: 400px;
         background-image :url(${Gif});
         background-position : center;
         background-repeat:no-repeat;
         background-size:cover;
         border-radius: 5px;
         @media (max-width : 768px){
            width : 100%;
            height: 300px;
     }
     }
     .Right{
         width:60%;
         position:relative;
         display : flex;
         flex-direction : column;
         @media (max-width : 768px){
            width : 100%;
        }
         p{
             margin-bottom: 20px;
         }
         .Top{
             align-self :flex-end;
             

             @media (max-width: 768px){
                text-align : center;
                 h1{
                     font-size :1.6rem;
                 }
                 p{
                     font-size : 18px;
                 }
             }
         }
         .Info{
             height : 25%;
             width : 100%;
             font-family: 'Nunito Sans', sans-serif;
             font-size : 1.3rem; 
             display: flex;
             flex-direction : row;
             background: linear-gradient(0deg, rgba(48,26,81,0.92) 0%, rgba(48,26,81,0) 100%);
             backdrop-filter: blur( 5px );
             -webkit-backdrop-filter: blur( 5px );
             padding : 10px;
             justify-content : space-around;

             @media (max-width : 768px){
             height : 30%;
             }

             .Item:first-child{
                  border-style: solid;
                  border-width: 1px;
                  border-image: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%) 1;
                  border-bottom:0;
                  border-left:0;
                  border-top: 0;
             }

             .Item{
                 display: flex;
                 flex-direction : column-reverse;
                 align-items :center;
                 width : 50%;

                 .TT{
                     font-size : 0.9rem;
                     font-family: 'Nunito Sans', sans-serif;
                 }
                 .Price{
                 display : flex;
                 font-family: 'Regen', sans-serif;
                              


                 .Symbole{
                 width: 30px;
                 height:30px;
                 @media(max-width : 768px){
                     width : 25px;
                     height: 25px;
                 }
                   }
                 }
             }
         }

         .Socials{
             display : flex;
             flex-direction : row;
             display : flex;
             justify-content : center;
             align-items : center;
             margin-left : 10%;
             a{
                 cursor : pointer;
             }

             .SocialItem {
                 width : 20px;
             }
             .SocialItem:first-child {
                 width : 20px;
                 margin-right : 10px;
             }
         }
         h1{
            font-family: 'Poppins', sans-serif;
            font-size : 2rem;
         }
         p{
            font-family: 'Nunito Sans', sans-serif;
            font-size : 1.3rem; 
            opacity : 0.8;
         }
     }

     .MintContainer{
         height: 80px;
         background-color :red;
         border-radius: 5px;
         right:10%;
         bottom: 5%;
         background: rgba(136,90,207, 0.32);
         backdrop-filter: blur( 12px );
         -webkit-backdrop-filter: blur( 12px );
         border :  1px solid rgba( 255, 255, 255, 0.05 );
         box-shadow: 0 8px 32px 0 rgba( 136,90,207, 0.18 );
         display : flex;
         justify-content : space-between;
         align-items :center;
       
         @media (max-width : 768px)
         {
             width : 100%;
         }

         button{
            width : 280px;
            height: 40px;
            border-radius : 3px;
            border : none;
            background : var(--MainColor);
            color : white;
            font-size : 20px;
            text-transform: uppercase;
            font-family: 'Regen', sans-serif;
            cursor : pointer;
            transition: 0.3s ease-in-out;
            margin-right : 30px;
            @media (max-width: 768px) {
                width : auto;
                padding : 0px 30px;
            }

            &:hover{        box-shadow:
            0 0 40px rgba( 241, 4, 148, 0.65 ),
            0 0 80px rgba( 241, 4, 148, 0.3 );
            }
            }
         
         @media (max-width : 768px){
            width : 100%;
            bottom :0;
            right :0;
         }

         
     }
 }
`





export default Mint