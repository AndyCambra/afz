import React from 'react'


const ListComponent = ({customs}) => {
  return (
    <>
        {customs.map((item, id)=>{
            return( 
            <p key={item.id}>{item}</p>
            )
        })}
  </>
  )
}

export default ListComponent