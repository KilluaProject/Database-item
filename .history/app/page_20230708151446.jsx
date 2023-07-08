import Image from 'next/image'




async function getProducts(){
  const res =  await fetch("https://64a7c8a4dca581464b84c5b0.mockapi.io/Products",{ cache: "no-cache" })
  const data = res.json()
  return data
}

export default async function Home() {

  const Products = await getProducts()

  return (
   <div className="container mx-auto py-6">
  
    <h1>Warung mbak asih</h1>

    <form action="">
      <input className="border-collapse" type="text" />
      <input type="text" />
      <button>Add Product</button>
    </form>


     
      <table className="table w-full rounded-lg bg-slate-200 mt-3">
        <thead className="font-bold text-base bg-slate-400 text-white">
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
