import React from 'react'

const CourseTitle = ({date, title, className}) => {
  return (
    <div className={className}>
        <p>{date}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default CourseTitle