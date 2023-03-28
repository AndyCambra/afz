import React from 'react'
import './sliderbar.css'

const SliderBar = ({id}) => {
  return (
    <div className='slider-bar'>
        <div className={id===1? 'mark' : 'slider-mark'}></div>
        <div className='slider-mark'></div>
        
    </div>
  )
}

export default SliderBar