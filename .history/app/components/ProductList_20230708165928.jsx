import React from 'react'
import { getProducts } from '../api/Api'

export default async function ProductList() {
    const productList = await getProducts()
  return (
    <div>

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
          {productList.map((product,index) => {
            return (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.produk}</td>
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
