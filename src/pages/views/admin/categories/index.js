import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import categoryApi from '../../../../api/categoriesApi'

export const Category_list = ({categories, newCates}) => {
    
    const onhandelRemove = async (id)=>{
        const confirms = window.confirm('Bạn có chắc chắn muốn xóa ??');
        if(confirms)
        {
            await categoryApi.remove(id);
            const newcates = categories.filter(cate => cate.id != id);
            newCates(newcates);
            alert('Xóa thành công !');
        }
            return false;
    }
    return (
        <div className="container-fluid">
            {/* DataTales Example */}
            <div className="nav">
                <Link className="nav-link border border-primary bg-white" to="/admin/category-add">
                    <i className="fas fa-fw fa-table" />
                    <span>Create Category</span>
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
                            <th width="160">Option</th>
                        </tr>
                    </thead>
                    <tbody>
                    {categories.map(({ id, name }, index) => (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{name}</td>
                                    <td className="text-center">
                                        <button className="btn btn-danger mr-1" onClick={() => onhandelRemove(id)}>Xóa</button>
                                        <Link to={"/admin/category-update-"+id} className="btn btn-primary">Update</Link>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}
