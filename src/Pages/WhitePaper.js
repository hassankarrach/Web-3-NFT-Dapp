import React from 'react'
import styled from 'styled-components'
import logo from '../Media/Logos/Logo.png'
import Footer from '../Components/Footer/Footer'
import { Navbar } from '../Components'
import { motion } from 'framer-motion' 
import { Title } from '@mui/icons-material'
import {FaInstagram,FaGlobe} from 'react-icons/fa'
import Logo from '../Media/Logos/LogoLoading.png'
import Member1 from '../Media/Team/Member1.jpeg'
import Member2 from '../Media/Team/Member2.jpeg'
import Member3 from '../Media/Team/Member3.jpeg'

function WhitePaper() {
  return (
    <motion.div
    initial ={{opacity:0}}
    animate= {{opacity:1, transition :{delay: 0.1,duration:1.3}}}
    exit={{ opacity:0 ,transition :{delay: 0.1,duration:0.2}}}
    >
    <StyledWhitePaper>
        <Navbar/>

        <div className='Content'>
            <h3 className='TopTitle'>Abundeez White Paper</h3>
            <div className='Infos'>
              <h3 className='Title'>Introduction</h3>
              <p className='Par'>
               10.000 Abundeez from the 5th dimension fell from the sky right on our blockchain. The Abundeez came to earth to inspire you to become the best version of yourself and to show you, that the life of your dreams is not only a dream. 
               The Abundeez say: "Abu aka ni day sobu chi ana" Meaning: If you can visualize it in your head, it is meant to become real. 
               Once you let an Abundee into your energy field, it will protect you, guide you and show you the way to the life of your dreams. They are lucky charms for abundance!
               The Abundeez believe that for us humans, abundance is our birthright, and they inspire you to create a life beyond your wildest dreams. 
               An abundant life full of LOVE, MONEY, FREEDOM, JOY, PURPOSE, and HEALTH. 
               Manifesting your dream life is not a sprint, it's a marathon. 
               Come join the Abundeez and grow your abundance mindset day by day and learn to manifest your dream life with us. 
               The Abundeez have one last thing they want to ask you: 
               "ane habu di dabi baktaktu, haman di bulak ta dosy nimo, di ta sond, da na owana kayana?? Da badi nu a ka an!" 
               Meaning: If you had all the money you need, all the time you need, all the freedom and skills you need, what would your dream life look like if anything was possible?
               Dream big and let’s create that together!
              </p>

              <h3 className='Title'>Abundeez Mint</h3>
              <p className='Par'>10.000 Abundeez from the 5th dimension fell from the sky right on our blockchain. Abundeez is unique and programmatically generated from over +80 possible attributes and traits like background, clothes, mouth, and head (Common & rares).
              Price pre-sale 0.08eth Price Public sale 0.11eth
              Mint date: TBA
              </p>
              <p className='Par'><span style={{fontWeight :'bold'}}>What can I do with my ABUNDEEZ NFT ?</span><br/>Hold Abundeez grants you access to the holders part of the community with inspiring teachings, courses, and speakers regarding manifesting your dream life and attracting more abundance. Holding an Abundeez NFT grants you access to our Manifest Wealth academy, 8D Cosmic Sounds journey, full moon ETH airdrops, and everything else we have in store and planned for the future for the Abundeez. 
              Owners of each ABUNDEEZ possess commercial usage rights to their NFTS. You're free to use your artwork as you please. 
              Simply holding onto your Abundeez also unlocks more benefits in the future.
              </p>

              <h3 className='Title'>Abundeez ETH airdrops</h3>
              <p className='Par' style={{fontWeight :'bold'}}>Full Moon Ethereum airdrops</p>
              <p className='Par'>
              During some full moons, airdrops of 11ETH  will be falling from the sky in lucky holders' wallets. These airdrops are golden tickets that will help you to fulfill your biggest dreams. Use it to make a dream purchase, use it as a startup fund to start your own business, or invest in that one course or training that you have been wanting to do for a long time. Long story short, use it as an amplifier to make your dreams come true!
              </p>
              <p className='Par' style={{textAlign : 'left'}}> - If we unexpectedly do not sell all 10,000 NFT's, the number and/or value of the airdrops will be adjusted proportionally.</p>

              
              <h3 className='Title'>Our Vision</h3>
              <p className='Par'>
              Our vision is to build a community of like-minded people who are eager to create their most abundant life, we give back abundantly to the community and love to inspire more people to join the NFT space & create the life of their dreams.
              The current situation in the world is showing us that neither the government nor our employers are going to help or save us. With the current inflation and prices going up, each day is showing us more and more the importance of taking self-leadership in our financial situation and the importance of creating abundance to be able to take care of ourselves and our family. 
              We are here with a long-term vision because your dream life isn’t built in one day. 
              Join us, learn from inspiring teachers and become motivated by speakers and teachers who already have created amazing results in the Nft space and their financial lives and love to share their wisdom and best tips with us.
              </p>
              <p className='Par' style={{textAlign : 'left'}}>Our Vision is:</p>
              <p className='Par' style={{textAlign : 'left'}}>
              - To create an ongoing personal growth academy helping holders to upgrade every aspect of their life. With inspiring speakers and teachers that are experts in their field.<br/>
              - To make NFT and cryptocurrency easy for people who are new in the blockchain space. Free startup training from experts.<br/>
              - To create an empowering community with collaborations with inspiring speakers/teachers and to invite the best of the best in their expert field to teach our community.<br/>
              - We are here for the long run because your dream life won't be built in one day. See holding your Abundeez NFT as your access to an all-year-round personal growth & how to create my dream life study.
              - To inspire all holders to live an abundant life and don't settle for anything less than your dream life.
              </p>


              <h3 className='Title'>Road Map</h3>
              <p className='Par' style={{textAlign :'left'}}>
              - Create an epic empowering community where you'll be inspired to create the life of your dreams. <br/>
              - Free NFT success training, inspiring speakers, and teaching about manifesting wealth.<br/>
              - Mint - 10k NFT's Common & rares Whitelist price 0.08ETH Public 0.11ETH (222 NFTs we mint ourselves to wrap as gifts for the community and collabs)<br/>
              - 1st Full moon 22 Ethereum "golden ticket" airdrop 2 holders receive 11ETH each<br/>
              - 2nd Full moon 33 Ethereum "golden ticket" airdrop 3 holders receive 11ETH each.<br/>
              - 3rd Full moon 44 Ethereum "golden ticket" airdrop 4 holders receive 11ETH each.
              - Manifest Wealth Academy 
              - Abundeez 8D Cosmic Sounds Journey 
              - Collabs with speakers, teachers, and influencers 
              - Hire a marketing team 
              - Contests, giveaways & more.
              - 20% of royalties will be put aside in a community fund. Holders vote on how we spend it...
              </p>

              
              <h3 className='Title'>The Team</h3>

              <div className='Member'>
                <div className='ImgHolder img2'>
                </div>

                <div className='MemberContent'>
                <div className='Top'>
                 <p className='Title_'>Founder: Maaike van Rheenen</p>
                 <a href='https://www.instagram.com/maaikevanrheenen.nl/' target='_blank'>
                 <div className='IconHolder'>
                    <FaInstagram className='Icon' color='white' size={20}/>
                 </div>
                 </a>
                </div>
                <p className='Par'>Maaike is known in the Netherlands for being a successful entrepreneur, law of attraction & money mindset teacher, and inspirator. She has been mentioned on tv and in several well-known news magazines, Maaike helped and inspired thousands of people to believe in themselves and create the life of their dreams. She has helped thousands of people become more happy, self-confident, self-loving, and more abundant. Maaike's saying: "Why aim for less if you can have it all in life! Maaike is a serial entrepreneur and has set up multiple successful businesses in the past. People say that everything she touches turns into gold. Maaike's vision for Abundeez is to create an inspiring personal growth community that helps her holders to become happier, more fulfilled, and wealthy in life.</p>
                </div>
              </div>



              <div className='Member'>
                <div className='ImgHolder img1'>
                </div>

                <div className='MemberContent'>
                <div className='Top'>
                 <p className='Title_'>Community Manager: Nesha Victoria</p>
                 <a href='https://www.instagram.com/neshavictoriacoaching/' target='_blank'>
                 <div className='IconHolder'>
                    <FaInstagram className='Icon' color='white' size={20}/>
                 </div>
                 </a>
                </div>
                <p className='Par'>Nesha is an online business manager, entrepreneur, and spiritual teacher. Having worked with Maaike for the last 5 years in different setups and businesses Nesha has learned a lot about business and entrepreneurship from Maaike. She has a good eye for helping bring visions to life, inspiring the people around her, and thanks to her empathic character will help you bring the best out in yourself. As the Community Manager Nesha makes sure all processes run Smoothly together so that we can create the inspiring community and holders academy that will allow so many people to create their most abundant life.</p>
                </div>
              </div>


              <div className='Member'>
                <div className='ImgHolder img3'>
                </div>
                <div className='MemberContent'>
                <div className='Top'>
                 <p className='Title_'>Jente van der Woude: Energy & Idea Generator </p>
                 <a href='https://instagram.com/met_jente?utm_medium=copy_link ' target='_blank'>
                 <div className='IconHolder'>
                    <FaInstagram className='Icon' color='white' size={20}/>
                 </div>
                 </a>
                </div>
                <p className='Par'>Jente is manifesting her dream life daily. She currently lives in Ibiza, enjoying abundance, freedom, and pleasure on a daily basis. Jente shares her path & experiences with her clients, who learn to believe that they too deserve to be happy in this life. Within the community, Jente's role is to support the team, raise the energy & vibration and generate awesome ideas to share with the holders & increase abundance in the world.</p>
                </div>
              </div>

           

            
              <h3 className='Title'>Legal Disclaimer</h3>
              <div>
              <p className='Par' style={{textAlign :'left'}}>This whitepaper acts both as a future roadmap as well as a guide for our holders, though do note that the information in this whitepaper is still subject to change going forward. </p>
              
              <p className='Par' style={{textAlign :'left' ,marginBottom :'10px', fontWeight :'bold'}}>No Advice:</p>
              <p className='Par' style={{textAlign :'left'}}>This white paper does not obligate anybody to sign a contract or make a legally enforceable commitment to contribute. This white paper also does not constitute any form or part of any opinion that can be construed as advice, or that can be used to sell or solicit any offer by Abundeez to purchase our NFTs, nor shall it be construed as a part of any effect that can be used in the formation of a contract or an investment decision. </p>

              <p className='Par' style={{textAlign :'left' ,marginBottom :'10px', fontWeight :'bold'}}>Compliance with tax obligations:</p>
              <p className='Par' style={{textAlign :'left'}}>Users of the Website are entirely responsible for determining what, if any, taxes, if any, apply to their transactions. The Website's owners or authors are not responsible for determining which taxes apply to transactions.</p>

              <p className='Par' style={{textAlign :'left' ,marginBottom :'10px', fontWeight :'bold'}}>Limitation of liability:</p>
              <p className='Par' style={{textAlign :'left'}}>Abundeez shall not be held liable for any loss or harm resulting from the use of this website's material, including written material, links to third-party sites, data, quotations, charts, and buy/sell signals. Please be fully informed about the dangers and expenses of trading assets on the financial markets (digital or otherwise). ICOs, in particular, is one of the riskiest investing options. There's a chance you'll lose your whole investment. </p>

              <p className='Par' style={{textAlign :'left' ,marginBottom :'10px', fontWeight :'bold'}}>Investment risks:</p>
              <p className='Par' style={{textAlign :'left'}}>Trading cryptocurrencies have a high level of risk and is not suited for all investors. You should carefully evaluate your investing goals, level of expertise, and risk appetite before opting to trade cryptocurrencies, tokens, or any other digital asset. We recommend investing only what you can afford to lose.</p>
              </div>


              <div style={{display :'flex', alignItems : 'center', justifyContent :'center'}}>
              <img style={{width : '250px'}} src={Logo}/>
              </div>
            </div>
        </div>

        <Footer/>
    </StyledWhitePaper>
    </motion.div>
  )
}

const StyledWhitePaper = styled.div`
display : flex;
flex-direction :column;
justify-content : center;
align-items : center;
color : white;


 
.Content{
    background-color : white ;
    border-radius : 15px;
    margin  : 10%;
    background: rgba(47,26,81, 0.32);
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    overflow : hidden;
    border :  1px solid rgba( 255, 255, 255, 0.05 );
    margin-bottom : 50px;

    .Member{
      display : flex;
      margin-bottom : 10px;
      
      .ImgHolder{
        width : 30%;
        border-top-left-radius : 6px;
        border-bottom-left-radius : 6px;
        background-position : center;
        background-size : cover;
        border :  1px solid rgba( 255, 255, 255, 0.4 );
      }
      .img1{
        background-image : url(${Member1});
      }
      .img2{
        background-image : url(${Member2});
      }
      .img3{
        background-image : url(${Member3});
      }

      .MemberContent{
       width : 70%;
       background: linear-gradient(90deg, rgba(53,28,94,0.8) 0%, rgba(53,28,94,0) 30%);

       .Top{
         display :flex;
         flex-direction : row;
         align-items : center;
         margin-left : 4%;
         margin-bottom : 10px;
         font-family  : 'Nunito Sans';
         line-height  : 1.5;
         font-size    : 1.1rem;
         font-weight : bold;
         padding : 6px 0px;
         border-top-left-radius : 5px;
         border-bottom-left-radius : 5px;
         .Title_{
           margin-right : 10px;
         }
         .IconHolder{
           display : flex;
           justify-content : center;
           align-items : center;
          
         }
       }
      }

    }

    @media (max-width : 768px){
      margin  : 25% 7%;
    }


  .TopTitle{
    font-family  : var(--font-tertiary);
    font-size    : 2.2rem;
    margin-bottom: 25px;
    background: linear-gradient(90deg, rgba(53,28,94,0) 0%, rgba(53,28,94,0.5) 50%, rgba(53,28,94,0) 100%);
    width : 100%;
    padding : 8px 5%;
    display : flex;
    justify-content :center;
    align-items :center;
    border-width: 1px;
border-style: solid;
border-image: linear-gradient(280deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0) 100%) 1;
border-top:0;
border-left:0;
border-right:0;
  }
  .Infos{
    padding : 0px 5%;
    
    .Title{
    font-family  : var(--font-tertiary);
    font-size    : 1.7rem;
    margin-bottom: 25px;
    background: linear-gradient(90deg, rgba(53,28,94,0.5) 0%, rgba(53,28,94,0) 30%);
    padding : 10px;
    border-top-left-radius :25px;
    }
    .Par{
    font-family  : 'Nunito Sans';
    line-height  : 1.5;
    font-size    : 1.1rem;
    padding : 0px 4%;
    margin-bottom : 30px;
  }
  }
}
`

export default WhitePaper