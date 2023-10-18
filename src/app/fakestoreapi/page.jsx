import { getProductFake } from '@/libs/obtenerProductos';
import TarjetaProductoFake from '@/components/TarjetaProductoFake';
const DummyPageApi = async () => {

    const data = await getProductFake();
    console.log(data);
    
    return (
      <div>

            <div className='p-5'>
              {data.map((item) => (
                <TarjetaProductoFake item={item} />

                ))}
              <div></div>
            </div>
      </div>
  )
}
export default DummyPageApi
