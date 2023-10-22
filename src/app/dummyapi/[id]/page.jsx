import React from 'react'

async function obtnerDatoDummy(id){
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    if(! response.ok) throw Error('no se puede')
    return response.json()
}

const page = async ({params}) => {
    const {id} = params
    const data = await obtnerDatoDummy(id)

    return (
    <div className='flex  space-x-4 p-4'>
         <div className="w-1/2">
        <img src={data.thumbnail} alt={data.title} className="max-w-full" />
      </div>
      <div className="w-1/2">
        <h1 className="text-3xl font-semibold">{data.title}</h1>
        <p className="text-gray-600 text-lg">{data.description}</p>
        <p className="text-lg font-semibold text-blue-500">Price: ${data.price}</p>
        <p className="text-lg">Discount: {data.discountPercentage}% off</p>
        <p className="text-lg">Rating: {data.rating}</p>
        <p className="text-lg">In Stock: {data.stock} units</p>
        <p className="text-lg">Brand: {data.brand}</p>
        <p className="text-lg">Category: {data.category}</p>
        <div className="mt-4">
          {data.images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} className="max-w-full mb-4" />
          ))}
        </div>
      </div>
    </div>

  )
}

export default page