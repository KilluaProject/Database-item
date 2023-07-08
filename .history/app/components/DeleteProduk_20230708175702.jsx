"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DeleteProduk(product) {
    
    const [modal, setModal] = useState(false)
    const [isMutating, setIsMutating] = useState(false)
    const router = useRouter();

    async function handleDeleted(productId){
        setIsMutating(true)
        await fetch (`https://64a7c8a4dca581464b84c5b0.mockapi.io/Products/${productId}`, {
            method: "DELETE",   
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
        <button className="btn btn-error btn-sm" onClick={handleChange}>Deleted</button>
        <input type="checkbox" checked={modal} onChange={handleChange} className="modal-toggle" />

        <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold">Anda Yakin Mau Menghapus Produk ini {product.produk} ?</h3>

                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleChange}>Close</button>

                        {!isMutating ? (

                            <button type="button" className="btn btn-primary" onClick={() => handleDeleted(product.id)}> Delete</button>
                        ): (

                            <button type="button" className="btn btn-loading" onClick={handleChange}>Deleting ... </button>
                        )}
                    </div>
        

            </div>
        </div>

    </div>
  )
}
