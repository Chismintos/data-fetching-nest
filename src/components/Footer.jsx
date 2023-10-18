// Footer.jsx

import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='bg-blue-300 text-black py-12'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div>
            <Image
              src={'logoheader.svg'}
              width={300} // Ajusta el ancho del logo aquí
              height={300} // Ajusta el alto del logo aquí
              alt="logo pagina"
              style={{
                width: '80%', // Establece el ancho máximo al 100%
              }}
              priority
            />
          </div>
          <div>
            <h6 className='mb-2 font-bold'>Blank</h6>
            <ul className="list-none text-[13px]">
              <li>Participa</li>
              <li>Publicaciones Oficiales</li>
              <li>Marco Jurídico</li>
              <li>Plataforma Nacional de Transparencia</li>
            </ul>
          </div>
          <div>
            <h6 className='text-[16px] font-bold'>Metodos de pago</h6>
            <ul className="list-none ">
              <li>Tarjeta de debito y credito</li>
              <li>Tarjeta de regalo</li>
              <li>Tarjeta en efectivo</li>
              <li>Pagos a meses</li>

            </ul>
          </div>
          <div>
            <h6 className='font-bold'>Podemos ayudarte</h6>
            <ul>
              <li>Devolver o remplazar productos</li>
              <li>Gestionar contenido y dispositivos</li>
              <li>Ayuda</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
