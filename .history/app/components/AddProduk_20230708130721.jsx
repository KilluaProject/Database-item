"use client"

import React, { useState } from 'react'

export default function AddProduk() {

    const [modal, setModal] = useState(false)

    function handleChange(){
        setModal(!modal)
    }

  return (
    <div>
        <button className="btn" onClick={handleChange}>Tambah Produk</button>
        <input type="checkbox" checked={modal} onChange={handleChange} className="modal-toggle" />

        <div className="modal">
            <div className="modal-box">
                <h3>Add New Product</h3>
                <form>
                    <div className="form-control">
                        <label className="label font-bold">Nama Produk</label>
                        <input type="text" className="input w-full input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">Harga</label>
                        <input type="text" className="input w-full input-bordered" />
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
