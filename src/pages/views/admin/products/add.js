import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import firebase from "../../../../firebase"

export const Product_add = ({onAdd, categories}) => {
    const {register, handleSubmit, errors} = useForm();
    const onHandleSubmit = (data) =>{
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    ...data,
                    thumb: url
                }
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAdd(newData);
            })
        });
    }
    return (
        <div className="container-fluid">
            <h3>Add Product</h3>
            <form className="shadow p-3" onSubmit={handleSubmit(onHandleSubmit)}  encType="multipart/form-data">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Name" ref={register({required: true, pattern:/([^\s])/})}/>
                        {errors.name && <span className="text-danger">This field is required </span>}
                    </div>
                    <div className="form-group col-md-3">
                    <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Category</label>
                        <select className="custom-select mr-sm-2" name="category" id="inlineFormCustomSelect" ref={register}>
                            {categories.map(({id,name}, index)=>(
                                <option key={index} value={id}>{name}</option>
                            ))}                            
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputPrice">Price</label>
                        <input type="number" className="form-control" name="price" placeholder="Price" ref={register({required: true})} />
                        {errors.price && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputPrice">Sale</label>
                        <input type="number" className="form-control" name="sale" placeholder="Sale" ref={register({required: true})} />
                        {errors.sale && <span className="text-danger">This field is required</span>}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="exampleFormControlFile1">Image</label>
                        <input type="file" name="image" className="form-control-file" id="exampleFormControlFile1"  ref={register({required: true})} />
                        {errors.thumb && <span className="text-danger">Bạn chưa chọn ảnh</span>}
                    </div>
                    <div className="form-group col-md-3" id="previewImage">
                       
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <textarea name="desc" className="form-control" rows="3" ref={register({required: true})}></textarea>
                    {errors.desc && <span className="text-danger">Hãy thêm mô tả cho sản phẩm</span>}
                </div>
                <div className="form-row mb-4">
                    <div className=" col-md-3 my-1">
                        <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Status</label>
                        <select className="custom-select mr-sm-2" name="status" id="inlineFormCustomSelect" ref={register}> 
                            <option multiple={true} value="0">Còn hàng</option>
                            <option value="1">Sắp có</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
