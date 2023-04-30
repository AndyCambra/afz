import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
import SliderBar from './SliderBar';
import nosotrosTexts from '.././utils/Texts/nosotrosTexts.json'
import { useLangContext } from '../../Context/LangContext'



const Carrousel = () => {
const [slideBarData, setSlideBarData] = useState({
  slideCount: 0,
  activeSlide: 0
})
const {selectedLanguage} = useLangContext()
const text = nosotrosTexts[selectedLanguage];
const videosMobile= text.videos.concat(text.videos2)
console.log(videosMobile)
  const slideBarManager=(swiper)=>{
    console.log(11)
    setSlideBarData({slideCount:swiper.slides.length, activeSlide: swiper.activeIndex})
  }

    useEffect(()=>{
        window.scrollTo(0,0);
      },[])

    return (
        <>
         
        <div className='carrousel-box'>
        <SliderBar slideBarData={slideBarData} />
      <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        onSlideChange={(swiper) => slideBarManager(swiper)}
        onSwiper={swiper => slideBarManager(swiper)}
        centeredSlides={true}
      
    
    
      >
     {videosMobile.map((item, key)=>
        <SwiperSlide> 
         
            <video 
             key={item.id}
             controls
             playsInline
             muted={false}
            className="video-size">
            <source src={item.videoStaff} type={item.type} id={item.id} alt={item.alt} />
            </video>
            <div className='card-title-mobile'>
            <p className='card-name'>{item.peopleName}</p>
            <p className='card-position'>{item.peoplePosition}</p>
            </div>

            </SwiperSlide>
        )}
      </Swiper>
      </div>
      </>
    );
  };
 
export default Carrousel

