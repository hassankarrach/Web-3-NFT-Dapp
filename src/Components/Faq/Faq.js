import React from 'react'
import styled from 'styled-components'
import Title from '../Title/Title';
import {FaWallet} from 'react-icons/fa';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




let data = [
    {
    title: "How do I purchase an ABUNDEEZ NFT?", 
    content: `On release, the Mint function will take you to the ABUNDEEZ mint DApp to connect your wallet and purchase your NFT. Join our discord for updates about the mint date.`
  }, {
    title: "Which wallet should I use?", 
    content: `Preferably MetaMask.`
  },{
    title: "What can I do with my ABUNDEEZ NFT?", 
    content: `Hold Abundeez grants you access to the holders part of the community with inspiring teachings and training regarding manifesting your dream life, the Manifest Wealth academy, 8D Cosmic Sounds journey, full moon ETH airdrops, and everything else we have in store and planned for the future for the Abundeez. Owners of each ABUNDEEZ possess commercial usage rights to their NFTs. You’re free to use your artwork as you please. Simply holding onto your Abundeez also unlocks more benefits. `
  },
  {
    title: "Buying NFT for the first time?", 
    content: `Get the Metamask Chrome or Firefox extension at Metamask.io. 
    After registration load your wallet with ETH. Alternatively, you can use a cryptocurrency service that allows you to change your regular currency to ETH i.e. Coinbase, Binance or Kraken. 
    Then, click the button "MINT" on our website to go to our mint DApp or our collection on Opensea. Connect your wallet and approve the transaction on Metamask. That’s it.`
  },
  {
    title: "New to NFT and need more help on how to buy an NFT? ", 
    content: `Join our discord for free NFTstartup training.`
  },
  {
    title: "What is our mission? ", 
    content: `Our mission is to build a community of like-minded people who are eager to create their most abundant life, we give back abundantly to the community and love to inspire more people to join the NFT space & create the life of their dreams. 
    We are here with a long term vision because your dream life isn’t built in one day. 
    Join us, learn from inspiring teachers and become motivated by speakers and teachers who already have created amazing results in the Nft space and their lives and love to share their wisdom and best tips with us.`
  }
];

function Faq() {
    return (
        <StyledFaq id='faq' data-aos="fade-up" data-aos-delay="250">
             <div className='Light'>
             </div>
          <Title title='FAQ'/>
            {
              data.map((items)=> <AccordionItem title={items.title} desc={items.content}/>)
            }
        </StyledFaq>
    )
}

const AccordionItem = (prop) =>{
    return(
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  style={{fill: "white"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{prop.title}</Typography>
        </AccordionSummary>
        <AccordionDetails
        className='details'
        >
          <Typography>
            {prop.desc}
          </Typography>
        </AccordionDetails>
      </Accordion>
   
    )
}

const StyledFaq = styled.div`
padding: 20px 6%;
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
position :relative;



   .Light{
  position :absolute;
  width: 230px;
height: 230px;
background: rgba(145,78,255, 0.9);
filter: blur( 100px );
top : 35%;
left :0;
}


   


.accordion{
background: rgba( 47, 26, 81, 0.5 );
backdrop-filter: blur( 5.5px );
-webkit-backdrop-filter: blur( 5.5px );
border: 1px solid rgba( 255, 255, 255, 0.03 );
color : white;
width : 100%;
}

.details{
background: rgba( 56, 30, 98, 0.55 );
box-shadow: 0 10px 62px 0 rgba( 56, 30, 98, 1 );
backdrop-filter: blur( 9px );
-webkit-backdrop-filter: blur( 9px );
border-radius: 2px;
}

`

export default Faq
