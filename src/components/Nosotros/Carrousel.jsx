import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect } from 'react';
import SliderBar from './SliderBar';
import videosMobile from '../utils/Texts/videosMobile';




const Carrousel = () => {
  

    useEffect(()=>{
        window.scrollTo(0,0);
      },[])

    return (
        <>
         
        <div className='carrousel-box'>
        <SliderBar id={videosMobile.id}/>
      <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        centeredSlides={true}
    
      >
     {videosMobile.map((item,key)=>
        <SwiperSlide> 
            <video 
             controls
             autoPlay
             muted={false}
            className="video-size">
            <source src={item.video} type={item.type} id={item.id} alt={item.alt} />
            </video>
            </SwiperSlide>
        )}
      </Swiper>
      </div>
      </>
    );
  };
 
export default Carrousel



