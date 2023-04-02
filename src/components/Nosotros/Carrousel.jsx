import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
import SliderBar from './SliderBar';
import videosMobile from '../utils/Texts/videosMobile';




const Carrousel = () => {
const [slideBarData, setSlideBarData] = useState({
  slideCount: 0,
  activeSlide: 0
})

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
     {videosMobile.map((item)=>
        <SwiperSlide> 
        {/*   key={item.id} */}
            <video 
             controls
             autoPlay
             muted={false}
            className="video-size">
            <source src={item.videoStaff} type={item.type} id={item.id} alt={item.alt} />
            </video>
            <div className='card-title'>
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

//<VideoCard key={item.id} companyPlace={item.companyPace} peopleName={item.peopleName} peoplePosition={item.peoplePosition} videoStaff={item.videoStaff} className='card' />

