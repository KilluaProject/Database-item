
import { getProducts } from "./api/Api"
import Product from "./components/Product"

export default async function Home() {

  const productList = await getProducts()
  return (
   <div className="container mx-auto py-6">

    <h1 className="text-2xl text-center"> Data Base barang </h1>

    <Product productList={productList}/>
   </div>
  )
}
