import React from 'react'
import Navbar from '../../component/font-end/Navbar'
import Footer from '../../component/font-end/Footer'
import './../../assets/css/gaia.css'
import './../../assets/css/fonts/pe-icon-7-stroke.css'
export const Main = ({ children, categories }) => {
    return (
        <div>
            <Navbar categories={categories} />
            <div className="container">
                {children}
            </div>
            <Footer />
        </div>
    )
}
