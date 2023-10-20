import React from 'react';

const Homepage = () => {
  return (
    <div>
      <section className="bg-gray-100 p-4">
        <div className="container mx-auto">
          <div className="text-center">
            <img src="https://cdn.discordapp.com/attachments/949783362283900968/1164743977652719636/CAPYBARA_SHOPPING_OKAY_I_PULL_UP_1_-removebg-preview-removebg-preview.png?ex=6544535c&is=6531de5c&hm=9d8cbedafe04464d0e1321924aa87db0029fecef02d84c6d05e8d936abad9676&" alt="Banner principal" className="mx-auto mb-4" />
            <h2 className="text-3xl font-bold">Descubre los mejores productos en línea</h2>
            <a href="#" className="bg-blue-500 text-white rounded-full py-2 px-6 mt-4 inline-block hover:bg-blue-700">
              Explorar Productos
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-8">
        <h3 className="text-2xl font-bold mb-4">Categorías Destacadas</h3>
        <div className="flex space-x-4">
          <div className="w-1/4">
            <img src="category1-image.jpg" alt="Categoría 1" className="w-full" />
            <h4 className="text-xl font-semibold mt-2">Categoría 1</h4>
          </div>
          <div className="w-1/4">
            <img src="category2-image.jpg" alt="Categoría 2" className="w-full" />
            <h4 className="text-xl font-semibold mt-2">Categoría 2</h4>
          </div>
          {/* Agrega más categorías aquí */}
        </div>
      </section>

      <section className="container mx-auto py-8">
        <h3 className="text-2xl font-bold mb-4">Productos Destacados</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 shadow-md">
            <img src="product1-image.jpg" alt="Producto 1" className="w-full" />
            <h4 className="text-lg font-semibold mt-2">Producto 1</h4>
            <p className="text-gray-600">Precio: $99.99</p>
            <a href="#" className="bg-blue-500 text-white rounded-full py-2 px-6 mt-2 block hover:bg-blue-700">
              Ver Detalles
            </a>
          </div>
          <div className="bg-white p-4 shadow-md">
            <img src="product2-image.jpg" alt="Producto 2" className="w-full" />
            <h4 className="text-lg font-semibold mt-2">Producto 2</h4>
            <p className="text-gray-600">Precio: $79.99</p>
            <a href="#" className="bg-blue-500 text-white rounded-full py-2 px-6 mt-2 block hover:bg-blue-700">
              Ver Detalles
            </a>
          </div>
          {/* Agrega más productos destacados aquí */}
        </div>
      </section>

      {/* Agrega más secciones y contenido según tus necesidades */}
    </div>
  );
};

export default Homepage;