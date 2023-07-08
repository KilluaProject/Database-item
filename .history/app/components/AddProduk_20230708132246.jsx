"use client"


import React, { useState } from 'react'

export default function AddProduk() {
    
    const [title, setTitle] = useState("")
    const [harga, setHarga] = useState("")
    const [modal, setModal] = useState(false)

    function handleChange(){
        setModal(!modal)
    }
    
    async function handleSubmit(e){
        e.preventDefault();
        await fetch ("https://64a7c8a4dca581464b84c5b0.mockapi.io/Products" , {
            method: 'POST',
            headers: {
                'Content-Type' : 'aplication/json'
            },
            body: JSON.stringify({
                title: title,
                harga: harga,
            })
            
        })
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
                        <input value={harga} onChange={(e) => setHarga(e.target.value)} type="text" className="input w-full input-bordered" />
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
