import React, {forwardRef} from 'react'
import { Link } from 'react-router-dom'
import './horizontalSubMenu.css'
import { useState } from 'react'

const HorizontalSubMenu = forwardRef(({title, text, reinsurersRef, usRef, comRef, teamRef, id, menuCategoryCompany, menuCategoryCompromise, menuCategoryReinsurers, menuCategoryStaff}, ref) => {
  const [isActive, setIsActive]=useState(false)

 const handleClick = nextRef => {
    setIsActive(!isActive)
    console.log(nextRef)
    nextRef?.current?.scrollIntoView({ behavior: "smooth" });
  } 

  return (
    <>
        <div className='subMenuBox' ref={ref}>
            <Link>
             <h5 className={id===3 ? 'menu-item-selected': 'menu-item'} onClick={() => handleClick(usRef)}>{menuCategoryCompany}</h5>
            </Link>
            
            <Link>
              <h5 className={id===2 ? 'menu-item-selected': 'menu-item'} onClick={() => handleClick(teamRef)}>{menuCategoryStaff}</h5>
            </Link>
            
            <Link>
              <h5 className={id===1 ? 'menu-item-selected': 'menu-item'} onClick={() => handleClick(reinsurersRef)}>{menuCategoryReinsurers}</h5>
            </Link>
           
            <Link>
              <h5 className={id===4 ? 'menu-item-selected': 'menu-item'} onClick={() => handleClick(comRef)}>{menuCategoryCompromise}</h5>
            </Link>
           
            <Link to="/">
              <h5 className='menu-item-home'>HOME</h5>
            </Link>
        </div>
        <h5 className='horizontalTitle'>{title}</h5>
        <p className='horizontalText'>{text}</p>
        
        </>
  )
})

export default HorizontalSubMenu