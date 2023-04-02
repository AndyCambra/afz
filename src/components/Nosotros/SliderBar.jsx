import React, { useEffect, useState }from 'react'
import './sliderbar.css'


const SliderBar = ({slideBarData}) => {
  const [slideCount, setSlideCount] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(()=>{
   if(slideCount === 0) { setSlideCount(slideBarData.slideCount)}
   setActiveSlide(slideBarData.activeSlide)
  },[slideCount, slideBarData])
 
 
  const ArrayBoxes =[]
  for (let i= 1; i <= slideCount; i= i+ 1){
   ArrayBoxes[i]=<div className={activeSlide === i? "mark":"slider-mark"}></div>
  
  }
 

  return(
  <div className='slider-bar'>
   {ArrayBoxes}
  </div>
)
}
export default SliderBar