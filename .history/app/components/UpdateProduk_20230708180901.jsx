"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function UpdateProduk(product) {
    
    const [produk, setProduk] = useState(product.produk)
    const [harga, setHarga] = useState(product.harga)
    const [modal, setModal] = useState(false)
    const [isMutating, setIsMutating] = useState(false)
    const router = useRouter();

    async function handleUpdate(e){
        e.preventDefault();
        setIsMutating(true)
        await fetch ("https://64a7c8a4dca581464b84c5b0.mockapi.io/Products" , {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                produk : produk,
                harga : harga,
            }),
            
        });

        setIsMutating(false)
        router.refresh();
        setModal(false)

    }
    
    function handleChange(){
        setModal(!modal)
    }


  return (
    <div>
        <button className="btn" onClick={handleChange}>Tambah Produk</button>
        <input type="checkbox" checked={modal} onChange={handleChange} className="modal-toggle" />

        <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold">Add New Product</h3>
                <form onSubmit={handleUpdate}>
                    <div className="form-control">
                        <label className="label">Nama Produk</label>
                        <input type="text" value={produk} onChange={(e) => setProduk(e.target.value)}  className="input w-full input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label ">Harga</label>
                        <input type="text" value={harga} onChange={(e) => setHarga(e.target.value)}  className="input w-full input-bordered" />
                    </div>
                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleChange}>Close</button>

                        {!isMutating ? (

                            <button type="submit" className="btn btn-primary" onClick={handleChange}> Save</button>
                        ): (

                            <button type="button" className="btn btn-loading" onClick={handleChange}> Saving ...</button>
                        )}
                    </div>
                </form>

            </div>
        </div>

    </div>
  )
}
