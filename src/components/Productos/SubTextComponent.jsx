import React from 'react'
import productsExtras from "../utils/Texts/productsExtras.json"

const SubTextComponent = () => {
  return (
    <div>
        {productsExtras.map((item, id)=>{
            return(
                <>
                <h5 key={item.id} className="extra-subtitle">{item.subtitle}</h5>
                <p className='extra-text'>{item.text}</p>
                </>
            )
        })
    }
    
    </div>
  )
}

export default SubTextComponent