import React from 'react'
import styled from 'styled-components'


function Welcome() {
    return (
        <StyledWelcome id='About'>
            <div className='img'>
            </div>
            <div className='Infos'>
               <p>
The Abundeez come to earth to inspire you to become the best version of yourself and to show you that the life of your dreams does not have to remain a dream. 



The Abundeez believe that for us humans, abundance is our birthright, and they inspire you to create a life beyond your wildest dreams.



An abundant life filled with LOVE, MONEY, FREEDOM, JOY, PURPOSE, and HEALTH.



Manifesting your dream life is not a sprint, it’s a marathon. Come join the Abundeez and grow your abundance mindset day by day and learn to manifest your dream life with us.



The Abundeez say: "Abu aka ni day sobu chi ana!" 

Meaning: If you can visualize it in your head, it is meant to become real!



Once you let an Abundee into your energy field, it will protect you, teach you, inspire you, guide you and show you the way to creating the life of your dreams. They are lucky charms for abundance!



The Abundeez have one last thing they want to ask you:

"ane habu di dabi baktaktu, haman di bulak ta dosy nimo, di ta sona, da na owana kayana?? Da badi nu a ka na!” 



Meaning: If you had all the money you need, all the time you need, all the freedom and skills you need, what would your dream life look like if anything was possible ? <br/> <span>Dream big and let’s create that together!</span>
               </p>
            </div>
        </StyledWelcome>
    )
}

const StyledWelcome = styled.div`
  width: 100%;
  height: auto;
  padding: 0px 6%;
  margin-top: 20px;
  display : flex;
  justify-content : center;
  align-items : center;
  color : white;
 
  .Infos{
    text-align : center;
    font-family: 'Poppins', sans-serif;
  }
  

  h1{
    margin-bottom : 15px;
  }
  p{
    font-family: 'Nunito Sans', sans-serif;
      font-size: 1.2rem;
      opacity : 0.9;
      transition : 0.2s ease-in-out;
      line-height : 1.6rem;

      span{
        font-weight : bold;
      }
      &:hover{
        opacity : 1;
      }
  }
`

export default Welcome
