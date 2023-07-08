"use client"


import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddProduk() {
    
    const [name, setName] = useState("")
    const [harga, setHarga] = useState("")
    const [modal, setModal] = useState(false)

    function handleChange(){
        setModal(!modal)
    }
    const rounter = useRouter();

    async function addProduct(e){
        e.preventDefault();
        
        await fetch ("http://localhost:5000/products" , {
            method: 'POST',
            headers: {
                "Content-Type" : "aplication/json",
            },
            body: JSON.stringify({
                name : name,
                harga : harga,
            })
            
        });
        setName("");
        setHarga("");
        rounter.refresh;
        setModal(false)
    }

  return (
    <div>
        <button className="btn" onClick={handleChange}>Tambah Produk</button>
        <input type="checkbox" checked={modal} onChange={handleChange} className="modal-toggle" />

        <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold">Add New Product</h3>
                <form onSubmit={addProduct}>
                    <div className="form-control">
                        <label className="label">Nama Produk</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="input w-full input-bordered" />
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
