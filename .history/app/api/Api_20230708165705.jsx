
export async function getProducts(){
    const res =  await fetch("https://64a7c8a4dca581464b84c5b0.mockapi.io/Products",{ cache: "no-cache" })
    const data = res.json()
    return data
  }