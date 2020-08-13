import React from 'react'
import { useForm } from "react-hook-form"
import categoryApi from "../../../../api/categoriesApi"

export const Category_create = ({categories, newCates}) => {

    const {register, handleSubmit, errors} = useForm();

    const onHandleSubmit = async (data) => {
        await categoryApi.create(data);
        const newCate = {
            id: categories.length + 1,
            ...data
          }
          newCates([
            ...categories,
            newCate
          ])
        alert('Thêm thành công !');
        window.history.back();
    }
    return (
        <div className="container-fluid">
            <h3>Add Product</h3>
            <form className="shadow p-3" onSubmit={handleSubmit(onHandleSubmit)}  encType="multipart/form-data">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Name" ref={register({required: true})}/>
                        {errors.name && <span className="text-danger">This field is required or invalid length(length min 5)</span>}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
