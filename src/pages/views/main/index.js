import React from 'react'
import {Link} from "react-router-dom";

export const Home = ({products}) => {
    return (
        <div>
            <div className="section">
                <div className="container">
                <div className="row">
                    <div className="title-area">
                    <h2>Chúng tôi</h2>
                    <div className="separator separator-danger">✻</div>
                    <p className="description">Chúng tôi luôn đem tới những sản phẩm tuyệt vời và chắc chắn sẽ khiến bạn hài lòng.</p>
                    <p className="description">Chất lượng sẽ làm lên thương hiệu.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon text-danger">
                        <i className="pe-7s-graph1" />
                        </div>
                        <h3>Sales</h3>
                        <p className="description">Giá cả hấp dẫn.</p>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon text-danger">
                        <i className="pe-7s-call" />
                        </div>
                        <h3>Support</h3>
                        <p className="description">Hỗ trợ 24/7.</p>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon text-danger">
                        <i className="pe-7s-box1" />
                        </div>
                        <h3>Shipper</h3>
                        <p className="description">Ship hàng toàn quốc</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
            <div className="section">
                <div className="container shadow pt-4">
                    <div className="row">
                        <div className="title-area">
                        <h2>Sản phẩm</h2>
                        <div className="separator separator-danger">✻</div>
                        </div>
                    </div>
                    <div className="row">
                        {products.slice(0, 8).map((item, index) => (
                            <div className="col-md-6 col-lg-3" key={index}>
                                <Link to={"/detail-"+ item.id} style={{textDecoration: 'none'}}>
                                    <div className="img-prod">
                                        <img className="img-fluid" src={item.thumbnail} alt={item.name} />
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
            
            <div className="section section-small section-get-started">
                <div className="parallax filter">
                <div className="image" style={{backgroundImage: 'url("assets/img/office-1.jpeg")'}}>
                </div>
                <div className="container">
                    <div className="title-area">
                    <h2 className="text-white">Vũ Duy Đăng</h2>
                    <div className="separator line-separator">♦</div>
                    <p className="description">Là thằng đàn ông thì phải thét ra lửa !</p>
                    </div>
                    <div className="button-get-started">
                    <a href="#gaia" className="btn btn-danger btn-fill btn-lg">Subscribe</a>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}
