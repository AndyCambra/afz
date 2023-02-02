import React from 'react'

const aduanas=[
"Importaciones o exportaciones temporales",
"Tránsitos terrestres", 
"Faltas de documentación",
"Envíos en consignación",
"Diferencia de derechos",
"Habilitación de depósitos", 
"Fiscales régimen automotriz"]

const ListComponent = () => {
  return (
    <>
        {aduanas.map((item, id)=>{
            return( 
            <p key={item.id}>{item}</p>
            )
        })}
  </>
  )
}

export default ListComponent