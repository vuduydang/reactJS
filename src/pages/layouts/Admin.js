import React from 'react'
import {Navbar} from '../../component/back-end/Navbar'
import { Topbar } from '../../component/back-end/Topbar';
import '../../assets/css/admin/sb-admin-2.min.css';
import '../../assets/vendor/fontawesome-free/css/all.min.css';

export const Admin = ({ children }) => {
    return (
        <div id="wrapper">        
            <Navbar/>
            <div id="content-wrapper" className="d-flex flex-column">
                <div className="content">
                    <Topbar/>
                    {children}
                </div>
            </div>
        </div>
    )
}