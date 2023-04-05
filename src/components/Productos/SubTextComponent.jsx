import React from 'react'


const SubTextComponent = ({productsExtras}) => {
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