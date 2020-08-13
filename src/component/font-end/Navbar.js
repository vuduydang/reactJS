import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({categories}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand border-right" href="#">Dangvd-Ph07886</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link border-right" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    {categories.map(({id, name},index) => (
                        <li className="nav-item" key={index} >
                            <Link className="nav-link" to={"/category-"+id}>{name}</Link>
                        </li>
                    ))}
                    <li className="nav-item">
                        <Link className="nav-link border-left" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <Link className="float-right" to="/admin/">Admin --</Link>
        </nav>

    )
}

export default Navbar