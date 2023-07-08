
async function getProducts(){
  const res =  await fetch("https://64a7c8a4dca581464b84c5b0.mockapi.io/Products",{ cache: "no-cache" })
  const data = res.json()
  return data
}


export default async function Home() {

  const Products = await getProducts()

  const addProduct = async(e) => {
    "use server"
    const product = e.get("product")?.toString();
    const harga = e.get("harga")?.toString();

    if(!product || !harga) return;

    const newProduct = {
      product : product,
      harga : harga,
    };

    await fetch("https://64a7c8a4dca581464b84c5b0.mockapi.io/Products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers : {
        "Content-Type" : "application/json"
      }
    })


  }

  return (
   <div className="container mx-auto py-6">
  
    <h1>Warung mbak asih</h1>

    <form action={addProduct}>
      <input className="border" name="product" />
      <input className="border" name="harga" />
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
