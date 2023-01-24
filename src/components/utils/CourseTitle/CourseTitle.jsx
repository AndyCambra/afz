import React from 'react'
import './coursetitle.css'

const CourseTitle = ({date, title}) => {
  return (
    <div className='course-title-block'>
        <p>{date}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default CourseTitle