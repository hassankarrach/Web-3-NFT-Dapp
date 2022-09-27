import React from 'react'
import styled from 'styled-components'
import img1 from '../../Media/Team/1.jpg'
import img2 from '../../Media/Team/2.jpg'
import img3 from '../../Media/Team/3.jpg'
import Title from '../Title/Title'
import {FaInstagram,FaGlobe} from 'react-icons/fa'


function Team() {
    return (
        <StyledTeam id='team' data-aos="fade-up" data-aos-delay="250">
            <Title title='Team'/>
            <div className='Members'>
                 <TeamMember img={img1} name='Maaike van Rheenen'  job='Founder'    link='https://www.instagram.com/maaikevanrheenen.nl/'/>
                 <TeamMember img={img2} name='Nesha Victoria'      job='Co-creator' link='https://www.instagram.com/neshavictoriacoaching/'/>
                 <TeamMember img={img3} name='Jente van der Woude' job='Energy & Idea Generator' link='https://instagram.com/met_jente?utm_medium=copy_link'/>
            </div>
        </StyledTeam>
    )
}

const TeamMember = ({img, name, job, link}) =>{
    return(
        <div class="profile-card">
        <div className="img">
           <img src={img}/>
        </div>
        <div className="caption">
           <h3>{name}</h3>
           <p>{job}</p>
           <div className='Social'>
             <a href={link} target='_blank'>
             <FaInstagram className='link'  size={20}/>
             </a>
           </div>
        </div>
      </div>
    )
}

const StyledTeam = styled.div`
     width: 100%;
     padding : 20px 6%;
     display: flex;
     flex-direction : column;
     justify-content: center;
     align-items: center;
     margin-bottom : 40px;
     background-position : center;
     background-size : cover;
     background-repeat : no-repeat;
     .Members{
         display : flex;
         flex-direction : row;
     }

     .profile-card{
     position: relative;
     font-family: sans-serif;
     width: 200px;
     height: 200px;
     background: linear-gradient(0deg, rgba(54,30,96,0.65) 0%, rgba(54,30,96,0) 100%);
     backdrop-filter: blur( 5px );
     -webkit-backdrop-filter: blur( 5px );
     border-radius: 10px;
     border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );
     padding: 30px;
     border-radius: 50%;
     transition: .6s;
     margin: 0 15px;


   }
   .profile-card:hover{
     border-radius: 8px;
     height: 240px;
     @media (max-width : 768px){
      height: 260px;
     }
   }

   .profile-card .img{
     position: relative;
     width: 100%;
     height: 100%;
     transition: .6s;
     z-index: 99;
   }

   .img img{
     width: 100%;
     border-radius: 50%;
     box-shadow: 0 0 22px #3336;
     transition: .6s;
   }

   .profile-card:hover .img{
     transform: translateY(-60px);
   }

   .profile-card:hover img{
    border-radius: 8px;
    box-shadow:
    0 0 80px rgba( 241, 4, 148, 0.55 ),
    0 0 120px rgba( 241, 4, 148, 0.3 );
   }

   .caption{
     text-align: center;
     transform: translateY(-85px);
     opacity: 0;
     transition: .6s;
     @media (max-width : 768px){
     transform: translateY(-95px);
     }
     .Social{
       .link{
         cursor: pointer;
         color : white;
         transition : 0.2s ease-in-out;
       }
       .link:hover{
         color : var(--MainColor);
       }
     }
   }
   .profile-card:hover .caption{
     opacity: 1;
   }
   .caption h3{
     font-size: 21px;
     font-family: 'Regen', sans-serif;
     color : white;
     @media (max-width : 768px){
      font-size: 18px;
     }
   }
   .caption p{
     font-size: 15px;
     color: white;
     margin: 2px 0 9px 0;

     @media (max-width : 768px){
      font-size: 13px;
     }
   }

   @media (max-width: 768px) {
      height : 500px;
      .profile-card{
     width: 150px;
     height: 150px;
     }

     .profile-card:hover .img{
     transform: translateY(-0px);
   }
   .Members{
       flex-direction : column;
   }
   }
`

export default Team
