import { getProductDummy } from '@/libs/obtenerProductos';
import TarjetaProductoDummy from '@/components/TarjetaProductoDummy';

const DummyPageApi = async () => {

    const {products} = await getProductDummy();
    console.log(products);

        return (
        <div>

            <div className='p-5'>
                {products.map((item) => (
                    <TarjetaProductoDummy item={item} />

                    ))} 
                
            </div>
        </div>
    )
}
export default DummyPageApi
