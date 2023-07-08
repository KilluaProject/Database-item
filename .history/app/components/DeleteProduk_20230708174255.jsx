"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddProduk() {
    
    const [produk, setProduk] = useState("")
    const [harga, setHarga] = useState("")
    const [modal, setModal] = useState(false)
    const [isMutating, setIsMutating] = useState(false)
    const router = useRouter();

    async function handleSubmit(e){
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
        setProduk("");
        setHarga("");
        router.refresh();
        setModal(false)

    }
    
    function handleChange(){
        setModal(!modal)
    }


  return (
    <div>
        <button className="btn btn-error" onClick={handleChange}>Deleted</button>
        <input type="checkbox" checked={modal} onChange={handleChange} className="modal-toggle" />

        <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold">Anda Yakin Mau Menghapus Produk ini ?</h3>

                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleChange}>Close</button>

                        {!isMutating ? (

                            <button type="submit" className="btn btn-primary" onClick={handleChange}> Save</button>
                        ): (

                            <button type="button" className="btn btn-loading" onClick={handleChange}> Saving ...</button>
                        )}
                    </div>
        

            </div>
        </div>

    </div>
  )
}
