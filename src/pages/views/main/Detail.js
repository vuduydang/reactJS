import React from 'react'
import {useParams} from "react-router-dom"

export const Detail = ({products}) => {
    let {id} = useParams(); //get id
    const {name, thumbnail, price, description, status} = products.find(product => product.id == id); //get product in products
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="title-area">
                        <h2>Chi tiết sản phẩm</h2>
                        <div className="separator separator-danger">✻</div>
                    </div>
                </div>
                <div className="row shadow-none p-3 mb-5 bg-light rounded">
                    <figure class="figure col-6">
                        <img src={thumbnail} className="figure-img img-fluid rounded" alt={name} />
                        <figcaption class="figure-caption text-right">{name}</figcaption>
                    </figure>
                    <div className="col-6">
                        <h2>{name}</h2>
                        <p>Price: <span className="text-danger">{price}</span></p>
                        <p>Trạng thái: <span className="text-danger">{status == 0 ? 'Còn hàng':'Hết hàng'}</span></p>
                        <div className="col-md-3 ml-4 mt-4">
                            <button className="btn btn-primary">Add To Card</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="title-area">
                    <h4>Mô tả</h4>
                </div>
                <div className="row">
                    {description}
                </div>
            </div>
        </div>
    )
}
