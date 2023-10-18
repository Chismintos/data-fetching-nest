'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const TarjetaProductoDummy = ({ item }) => {
  const router = new useRouter();

  return (
    <div className=''>
      <div className='border-md'>
        <h2>{item.title}</h2>
        <img src={item.thumbnail} alt={item.title} className='w-60' />
        <button
          className=''
          onClick={() => {
            console.log(item.id);
            router.push(`http://localhost:3000/dummyapi/${item.id}`);
          }}
        >
          ver más
        </button>
      </div>
      
    </div>
  );
}

export default TarjetaProductoDummy;
