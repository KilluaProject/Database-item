import Image from 'next/image'


async function getProducts(){
  const res =  await fetch("https://64a7c8a4dca581464b84c5b0.mockapi.io/Products",{ next: { revalidate: 2 } })
  const data = res.json()
  return data
}

export default async function Home() {

  const Products = await getProducts()

  return (
   <div className="container mx-auto py-6">

      <table className="table w-full">
        <thead className="font-bold text-md">
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Harga</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Products.map((product,index) => {
            return (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.harga}</td>
              <td>Button</td>
            </tr>
            )
          })}
         
        </tbody>
      </table>


   </div>
  )
}
