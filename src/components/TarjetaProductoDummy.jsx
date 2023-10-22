'use client'
import React from 'react';
import { useRouter } from 'next/navigation'


const TarjetaProductoDummy = ({ item }) => {

  const router = new useRouter();

  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 my-4">
      <div className="flex items-center">
        <img src={item.thumbnail} alt={item.title} className="w-32 h-32 object-contain" />
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <button
            className="mt-2 bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-700"
            onClick={() => {
            console.log(item.id);
              router.push(`http://localhost:3000/dummyapi/${item.id}`);
            }}
          >
            Ver Más
          </button>
        </div>
      </div>
    </div>
  );
};

export default TarjetaProductoDummy;
