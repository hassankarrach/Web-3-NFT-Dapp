import React, {useEffect,useState,useContext} from 'react';
import styled from 'styled-components'
import '../Components/Header/Stars.css'
import { ethers } from "ethers";
import Gif from '../Media/Minting/Mint.gif'
import bg from '../Media/Minting/bgCard.png'
import Logo from '../Media/Logos/Logo.png'
import {FaPlus,FaMinus,FaWallet} from 'react-icons/fa';
import { motion } from 'framer-motion' 
import Loader from '../Pages/Loader'
//Notifications Component
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//MaterialUi
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
//Context
import { StateContext } from '../Contexts/StateContext';
//MerkleTree
import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import {Buffer} from 'buffer';
import Navbar from '../Components/Navbar/Navbar';
Buffer.from('anything','base64');



function Mint() {
      const {HandleConnectWallet, Mint_,PreSaleMint,currentAccount,currentNetwork,ContractInfo,loading,Pageloading} = useContext(StateContext); 
      //HandleCounter
      const [counter, setCounter] = useState(1);
      const handleClick1 = () => {
      if(counter<10) setCounter(counter + 1); 
      }
      const handleClick2 = () => {
      if(counter>1) setCounter(counter - 1);
      }

      const HandleMint_ =()=>{
        if(ContractInfo.SaleStep ===0){
          toast.info('Pre-sale is starting soon!');   
        }
        else if(ContractInfo.SaleStep ===1){
          PreSaleMint(counter);
        }
        else if(ContractInfo.SaleStep ===2){
          Mint_(counter);
        }
        else if(ContractInfo.SaleStep ===3){
          toast.info('Sold out!');
        }
        else if(ContractInfo.SaleStep ===4){
          toast.info('Sold out!');
        }
      }

     
  return (
    Pageloading && window.ethereum && currentNetwork ==='0x4' && currentAccount ?<Loader/>
    :
    <motion.div
    initial ={{opacity:0}}
    animate= {{opacity:1, transition :{delay: 0.1,duration:1.3}}}
    exit={{ opacity:0 ,transition :{delay: 0.1,duration:0.2}}}
    >
    <StyledMinting>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        <Navbar/>

        <div id="stars"></div>
        <div id="stars2"></div>

        <div className='Card'> 
            <div className='GifHolder'>
              <div className='Box'>
              <h3>{ContractInfo.TotalSupply.toString()}/{ContractInfo.MaxSupply.toString()}</h3>
              </div>
            </div>
            <div className='Right'>
                  <div className='Data'>
                         <div className='Item'>
                           <h1>Status :</h1>
                           <h1 className='Round'>
                             {
                               !currentAccount?
                               '-'
                               :ContractInfo.SaleStep === 0 ?
                               'Starting soon':
                               ContractInfo.SaleStep === 1 || ContractInfo.SaleStep === 2 ?
                               'OPEN':
                               ContractInfo.SaleStep === 3 || ContractInfo.SaleStep === 4?
                               'SOLD OUT'
                               : '-'
                             }
                           </h1>
                         </div>
             
                         <div className='Item'>
                           <h1>Round :</h1>
                           <h1 className='Round'>
                             {
                              !currentAccount?
                              '-'
                              :ContractInfo.SaleStep === 1 || ContractInfo.SaleStep === 0 ?
                              'Pre-Sale' 
                              :ContractInfo.SaleStep === 2 || ContractInfo.SaleStep === 3 || ContractInfo.SaleStep === 4 ?
                              'Public Sale' :'-'
                             }
                           </h1>
                         </div>

                         <div className='Item'>
                           <h1>Price :</h1>
                           <h1 className='Round'>
                           {
                             !currentAccount?
                             '-'
                             :ContractInfo.SaleStep === 0 || ContractInfo.SaleStep === 1? `${ethers.utils.formatEther(ContractInfo.PricePresale)} ETH`
                             :ContractInfo.SaleStep === 2? `${ethers.utils.formatEther(ContractInfo.PriceSale)} ETH `
                             :'-'
                           }
                           </h1>
                         </div>
                  </div>
      
                    <div className='CounterHolder'>
                    <div className='Counter'>
                             <FaPlus disabled={true}  className='icon' color='white' size={25} onClick={handleClick1}/>
                           <h3 className='CounterNum'>{counter}</h3>
                             <FaMinus className='icon' color='white' size={25} onClick={handleClick2}/>
                    </div>
  
                    <button disabled={!currentAccount || currentNetwork !='0x4'? true:false}
                     style={{cursor: !currentAccount || currentNetwork !='0x4'? 'not-allowed' :'' }}
                     onClick={()=>{  HandleMint_() }}>
                       {
                         loading?
                         <CircularProgress color="inherit" size={30} />
                         : 'Mint'
                       }
                    </button> 
  
                   {
                    <p className='Par'>
                      {
                        !currentAccount?
                        'Make sure you have Metamask installed and connect your account!'
                        :ContractInfo.SaleStep == 0?
                        'The mint starting soon!'
                        : ContractInfo.SaleStep == 1?
                        'the whitelisted can only get 2 NFTs during the Presale'
                        : ContractInfo.SaleStep == 2?
                        `1 Abundeez costs ${ethers.utils.formatEther(ContractInfo.PriceSale)} ETH (Excluding gas fees)`
                        : ContractInfo.SaleStep == 3?
                        'All 10,000 NFTs have sold out thank you and congrats to all participants!'
                        : ContractInfo.SaleStep == 4?
                        'All 10,000 NFTs have sold out thank you and congrats to all participants!'
                        :'-'
                      }
                      </p>
                   }
                    </div>
            </div>
        </div>

          {
            currentNetwork!= '0x1'?
            <p className='Note'>⚠️ You are not connected to the ethereum main network.</p>
            :''
          }
  </StyledMinting>
  </motion.div>
  )
}


const StyledMinting = styled.div`
  height: 100vh;
  background: radial-gradient(circle, rgba(49,13,78,1) 0%, rgba(17,7,42,1) 100%);
  overflow : hidden;


  .Note{
    position : absolute;
    color : white;
    font-size : 1.2rem;
    font-family: 'Nunito Sans', sans-serif;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width : 768px){
      bottom : 0;
      left: 0;
      transform : unset;
      font-size : 0.8rem;
      text-align : center;
    }
  }




  .Card{
    width : 70%;
    height: 50%;
    border-radius : 10px;
    position : absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: rgba(47,26,81, 0.52);
  backdrop-filter: blur( 5px );
  -webkit-backdrop-filter: blur( 5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    
    display : flex;
    flex-direction : row;
    justify-content: space-between;
    align-items :center;
    color : white;  
    overflow : hidden;
    @media (max-width: 768px) {
      flex-direction : column;
      height: 80%;
      width : 90%;
    }
    

    .Right{
      display : flex;
      flex-direction : column;
      width :70%;
      height: 100%;



      .CounterHolder{
          width: 100%;
          height: 100%;
          display: flex;
          align-items :center;
          justify-content :center;
          flex-direction : column;

          .Par{
            position: absolute;
            bottom: 5px;
            font-family: 'Ubuntu';
            opacity : 0.7;
            @media (max-width: 768px) {
                display: none;
            } 
          }
          button{
           margin-top : 30px;
           height : 40px;
           width : 150px;
           border-radius : 5px;
           cursor : pointer;
           border : none;
           padding :5px;
           background-color : var(--MainColor);
           color : white;
           font-family: 'Regen', sans-serif;
           font-size : 20px;
              @media (max-width: 768px) {
                width : 100px;
              } 
          }
          button:disabled,
          button[disabled]{
            border: 1px solid #999999;
            background-color: #cccccc;
            color: #666666;
          }

        }

        
      @media (max-width: 768px) {
        width :100%;
      }


      .Data{
        display : flex;
        justify-content: center;
        align-items : center;
        padding : 10px 0px;
        background: linear-gradient(90deg, rgba(30,13,55,0) 0%, rgba(30,13,55,0.8) 50%, rgba(30,13,55,0) 100%);

        border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(280deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%) 1;
   border-top:0;
   border-left:0;
   border-right:0;

        @media (max-width: 768px) {
        flex-direction : column;
        align-items : flex-start;
        .Item{
              margin : 5px 20px;
             }
        }
        .Item{
              display : flex;
              flex-direction: row;
              font-family: 'Ubuntu', sans-serif;
              margin-right : 30px;

              h1:first-child{
              margin-right : 10px;
              font-size : 18px;
              }
              .Round{
              color : var(--MainColor);
              font-size : 18px;
              text-transform: uppercase;
              }
            }
      }
    }

    .GifHolder{
      width : 30%;
      height : 100%;
      background-image: url(${Gif});
      background-position: center;
      background-size : cover;
      border-right: 1px solid rgba( 255, 255, 255, 0.18 );
      position : relative;
      .Box{
         padding : 10px;
         font-family: 'Ubuntu';
         position : absolute;
         bottom : 0;
         background : linear-gradient(90deg, rgba(47,26,81, 1) 0%, rgba(47,26,81, 0));
         color : white;

         border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%) 1;
   border-bottom:0;
   border-left:0;
   border-right:0;
      }
      @media (max-width: 768px) {
      width: 100%;
      height: 250px;
      border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );
      }
    }

    .Counter{
           display : flex;
           flex-direction : row-reverse;
           justify-content : center;
           align-items :center;
           border-radius : 8px;
           width : 150px;
           color : var(--MainColor);
           background: rgba( 10, 4, 26, 0.5 );
           border-radius: 6px;
           border: 1px solid rgba(209, 213, 219, 0.05);
           border: 1px solid rgba( 255, 255, 255, 0.18 );
           
           .CounterNum{
             font-size : 30px;
             font-family: 'Regen', sans-serif;
           }


           .icon{
               background-color : var(--MainColor);
               margin :10px 20px;
               padding : 5px;
               transition : 0.2s ease-in-out;
               border : none;
               border-radius : 4px;
               cursor : pointer;
           }
           .icon:hover{
               background-color : var(--MainColor)
           }
       }
}
`
const StyledConnectButton = styled.button`
   position : absolute;
   right :20px;
   top : 20px;
   padding : 10px;
   background-color : var(--MainColor);
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

export default Mint;