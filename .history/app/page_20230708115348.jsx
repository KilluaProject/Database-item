import Image from 'next/image'


async function getProducts(){
  const res =  await fetch("https://64a7c8a4dca581464b84c5b0.mockapi.io/Products",{ next: { revalidate: 10 } })
  const data = res.json()
  return data
}

export default async function Home() {

  const Products = await getProducts()

  return (
   <div>

        {Products.map((product) => {
          return (
            <div>
              <p>{product.name}</p>
              <p>{product.harga}</p>
            </div>
          )
        })}

   </div>
  )
}
