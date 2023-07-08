"use client"

import React, { useState } from 'react'
import AddProduk from './AddProduk'

export default function ProductList({productList}) {

    const [searchText, setSearchText] = useState("")

    const searchFilter = (productList) => {
        return productList.filter((product) =>
          product.produk.toLowerCase().includes(searchText.toLowerCase())
        );
      };

    const filteredItemList = searchFilter(productList)



  return (
    <div>
        <AddProduk/>
        <input 
        className="input-md mt-2 border rounded-md"
        type="text"
        value={searchText}
        placeholder="Cari Barang ... "
        onChange={(e)=> setSearchText(e.target.value)}
        />
        <table className="table w-full rounded-lg bg-slate-200 mt-3">
        <thead className="font-bo4e4ld text-base bg-slate-400 text-white">
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Harga</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredItemList.map((product,index) => {
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
