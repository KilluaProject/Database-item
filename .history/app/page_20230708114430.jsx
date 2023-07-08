import Image from 'next/image'


async function getProducts(){
  const res =  await fetch("https://64a7c8a4dca581464b84c5b0.mockapi.io/products")
  const data = res.json()
  return data
}

export default async function Home() {

  const Products = await getProducts()

  return (
   <div>

        {Products.map((produk) => {
          return (
            <div>
              <p>{produk.title}</p>
            </div>
          )
        })}

   </div>
  )
}
