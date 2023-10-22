import React from 'react';

const TarjetaProductoFake = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-4">
      <div className="flex items-center">
        <img src={item.image} alt={item.title} className="w-32 h-32 object-contain" />
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
          <div className="flex items-center mt-2">
            <p className="text-lg font-semibold text-yellow-600">Rating: {item.rating.rate}</p>
            <p className="text-gray-600 ml-2">Count: {item.rating.count}</p>
          </div>
          <p className="text-lg font-semibold text-blue-600">Precio: ${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default TarjetaProductoFake;
