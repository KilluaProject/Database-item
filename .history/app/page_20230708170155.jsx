
import { getProducts } from "./api/Api"
import ProductList from "./components/ProductList"

export default async function Home() {

  const productList = await getProducts()
  return (
   <div className="container mx-auto py-6">

    <h1 className="text-2xl text-center"> Daftar List Product </h1>

    <ProductList productList={productList}/>
   </div>
  )
}
