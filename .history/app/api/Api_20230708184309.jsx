
export async function getProducts(){
    const res =  await fetch("http://localhost:5000/products",{ cache: "no-cache" })
    const data = res.json()
    return data
  }