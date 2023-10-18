
/**
 * Datos obtenidos de
 * @returns 
 */

export async function getProductFake(){
  //await  la función debe esperar a que se resuelva 
  //la promesa que se le pasa antes de continuar la ejecución.
  //hcae una peticion de tipo get
    const response = await fetch('https://fakestoreapi.com/products')
    return response.json();


}

export async function getProductDummy(){
  
    const response = await fetch('https://dummyjson.com/products')
    return response.json();

}

