import React,{useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom"
import productApi from "../../../api/productApi"


export const Products = ({products}) => {
    let {id} = useParams(); //get id
    products = products.filter(product => product.cate_id == id);
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="title-area">
                    <h2>Sản phẩm</h2>
                    <div className="separator separator-danger">✻</div>
                    <p className="description">Chúng tôi luôn đem tới những sản phẩm tuyệt vời và chắc chắn sẽ khiến bạn hài lòng.</p>
                    <p className="description">Chất lượng sẽ làm lên thương hiệu.</p>
                    </div>
                </div>
            </div>
            <div className="container shadow pt-4">
                <div className="row">
                    {products.map((item, index) => (
                        <div key={index} className="col-md-6 col-lg-3">
                            <Link to={"/detail-"+ item.id} style={{textDecoration: 'none'}}>
                                <div className="img-prod">
                                    <img className="img-fluid" width="248" src={item.thumbnail} alt={item.name} />
                                    <div className="overlay" />
                                </div>
                                <div className="py-3 pb-4 px-3 text-center">
                                    <h3 className="text-dark">{item.name}</h3>
                                    <div className=" text-center">
                                        <div className="pricing">
                                        <p className="price text-danger"><span className="mr-2 price-dc">{item.price}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
