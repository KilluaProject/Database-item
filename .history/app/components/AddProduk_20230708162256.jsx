"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddProduk() {
    
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [modal, setModal] = useState(false)
    const router = useRouter();

    async function handleSubmit(e){
        e.preventDefault();
        
        await fetch ("http://localhost:5000/products" , {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                title : title,
                price : price,
            }),
            
        });
        setTitle("");
        setPrice("");
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
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">Nama Produk</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="input w-full input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label ">Harga</label>
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="input w-full input-bordered" />
                    </div>
                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleChange}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleChange}> Save</button>
                    </div>
                </form>

            </div>
        </div>

    </div>
  )
}
