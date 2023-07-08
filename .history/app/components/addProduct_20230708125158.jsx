import React from 'react'

export default function AddProduct() {
  return (
    <div>

        <div className="modal">
            <div className="modal-box">
                <h3>Add New Product</h3>
                <form>
                    <div className="form-control">
                        <label className="label font-bold">Title</label>
                        <input type="text" className="input w-full input-bordered" />
                    </div>
                </form>

            </div>
        </div>

    </div>
  )
}
