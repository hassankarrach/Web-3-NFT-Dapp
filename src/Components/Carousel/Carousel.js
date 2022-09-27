import React from 'react'
import styled from 'styled-components';
import {img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12, img13,img14} from './CarouselData'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import Swiper core and required modules
import SwiperCore, {Pagination} from 'swiper';

import { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

// install Swiper modules
SwiperCore.use([Pagination]);


function Carousel() {
    return (
        <StyledCarousel data-aos="fade-up" data-aos-delay="250">
          <Swiper 
          breakpoints={
              {
                   0:{
                    slidesPerView :1,
                   },
                   740: {
                    slidesPerView: 2,
                  },
                  1280:{
                    slidesPerView: 4,
                  }
              }
          }
          slidesPerView={4} 
          spaceBetween={0} 
          pagination={{ "clickable": true, "dynamicBullets": true}} 
          centeredSlides={true}
          className="mySwiper"
          loop={true}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false
          }}
          >
          <SwiperSlide>
               <Item img={img1}/>
          </SwiperSlide>
          <SwiperSlide className='item'>
               <Item img={img2}/>
          </SwiperSlide>
          <SwiperSlide className='item'>
               <Item img={img3}/>
          </SwiperSlide>
          <SwiperSlide className='item'>
               <Item img={img4}/>
          </SwiperSlide>
          <SwiperSlide className='item'>
               <Item img={img5}/>
          </SwiperSlide>
          <SwiperSlide className='item'>
               <Item img={img6}/>
          </SwiperSlide>
          <SwiperSlide className='item'>
               <Item img={img7}/>
          </SwiperSlide>
          <SwiperSlide className='item'>
               <Item img={img8}/>
          </SwiperSlide>
          <SwiperSlide className='item'>
               <Item img={img9}/>
          </SwiperSlide>
          <SwiperSlide className='item'>
               <Item img={img10}/>
          </SwiperSlide>
          <SwiperSlide className='item'>
               <Item img={img11}/>
          </SwiperSlide>
          <SwiperSlide className='item'>
               <Item img={img12}/>
          </SwiperSlide>
          <SwiperSlide className='item'>
               <Item img={img13}/>
          </SwiperSlide>
          <SwiperSlide className='item'>
               <Item img={img14}/>
          </SwiperSlide>
          </Swiper>
        </StyledCarousel>
    )
}

const Item = ({img}) =>{
    return(
       <div className='Card' style={{backgroundImage : `url('${img}')`}}>
       </div>
    )
}


const StyledCarousel = styled.div`
padding: 0px 6%;

.mySwiper{
    padding: 30px 0px;
    display: flex;
    justify-content : center;
    align-items : center;
}
 .Card{
  width: 290px;
  height : 300px;
  background : white;
  background-position : center;
  background-size : cover;
  border-radius: 8px;
  transition : 0.2s ease-in-out;
 }



 .swiper-pagination-bullet-active {
     background-color: var(--MainColor) !important;
}
.swiper-pagination-bullet {
	background: white;
}




@media (max-width: 768px){
  .Card{
    width:   200px;
    height : 210px;
  }
  .item{
      display: flex;
      justify-content : center;
 }
}
`

export default Carousel
