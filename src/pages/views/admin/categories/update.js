import React from 'react'
import { useForm } from "react-hook-form"
import {useParams} from "react-router-dom"
import categoryApi from "../../../../api/categoriesApi"

export const Category_update = ({categories, newCates}) => {
    let {id} = useParams(); //get id
    const cate = categories.find(category => category.id == id); //get category in categories
    const {register, handleSubmit, errors} = useForm();

    const onHandleSubmit = async (data) => {
        await categoryApi.update(data.id, data);
        const newCate = categories.map(cate => (
            cate.id == data.id ? data : cate 
          ));
          newCates(newCate);
          alert('Sửa thành công !');
    }
    return (
        <div className="container-fluid">
            <h3>Add Product</h3>
            <form className="shadow p-3" onSubmit={handleSubmit(onHandleSubmit)}  encType="multipart/form-data">
            <input type="hidden" defaultValue={id} name="id" ref={register}/>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" defaultValue={cate.name} name="name" placeholder="Name" ref={register({required: true, pattern:/^[a-z0-9A-Z]/g ,minLength: 5})}/>
                        {errors.name && <span className="text-danger">This field is required or invalid length(length min 5)</span>}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
