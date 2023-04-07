import React, {forwardRef} from 'react'
import { Link } from 'react-router-dom'
import './mobilesubmenu.css'
/* import { useState } from 'react' */

const MobileSubMenu = forwardRef(({reinsurersRef, usRef, comRef, teamRef, menuCategoryCompany, menuCategoryStaff, menuCategoryReinsurers, menuCategoryCompromise, handleClick}, ref) => {


  return (
    <>
        <div className='sub-menu-box' ref={ref}>
            <Link>
             <h5 className='menu-item-mobile'onClick={() => handleClick(usRef)}>{menuCategoryCompany}</h5>
            </Link>
            
            <Link>
              <h5 className='menu-item-mobile' onClick={() => handleClick(teamRef)}>{menuCategoryStaff}</h5>
            </Link>
            
            <Link>
              <h5 className='menu-item-mobile' onClick={() => handleClick(reinsurersRef)}>{menuCategoryReinsurers}</h5>
            </Link>
           
            <Link>
              <h5 className='menu-item-mobile' onClick={() => handleClick(comRef)}>{menuCategoryCompromise}</h5>
            </Link>
           
            <Link to="/">
              <h5 className='item-home-mobile'>HOME</h5>
            </Link>
        </div>
        
        </>
  )
})

export default MobileSubMenu