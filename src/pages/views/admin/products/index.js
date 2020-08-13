import React from 'react'
import { Link } from 'react-router-dom'

export const Product_list = ({products, remove}) => {
    console.log(products)

    const onhandelRemove = (id)=>{
        const confirms = window.confirm('Bạn có chắc chắn muốn xóa ??');
        if(!confirms)
        {
            return false;
        }
        remove(id);
    }
    return (
        <div>
             <div className="container-fluid">
                {/* DataTales Example */}
                <div className="nav">
                    <Link className="nav-link border border-primary bg-white" to="/admin/products-create-add">
                        <i className="fas fa-fw fa-table" />
                        <span>Create Product</span>
                    </Link>
                </div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                    </div>
                    <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th width="160">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                        {products.map(({ id, name, thumbnail, price }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>{name}</td>
                                        <td><img src={thumbnail} alt="" width="50" /></td>
                                        <td>{price}</td>
                                        <td className="text-center">
                                            <button className="btn btn-danger mr-1" onClick={() => onhandelRemove(id)}>Xóa</button>
                                            <Link to={"/admin/products-update-"+id} className="btn btn-primary">Update</Link>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
