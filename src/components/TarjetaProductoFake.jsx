import React from 'react'

const TarjetaProductoFake = ({item}) => {
  return (
    <div>
      <div key={item.id} className='flex p-6 my-4 rounded-md border-4 '>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Rate: {item.rating.rate}</p>
      <p>Count: {item.rating.count}</p>   

    <div>
      <img src={item.image} alt={item.title} className='w-32' />
      <p>Precio: ${item.price}</p>   
    </div>
    

  </div></div>
  )
}

export default TarjetaProductoFake