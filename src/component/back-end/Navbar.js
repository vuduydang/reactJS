import React from 'react'
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <Link className="nav-link" to="/admin/"><i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span>
                </Link>
            </li>
            {/* Nav Item - Tables */}
            <li className="nav-item">
                <Link className="nav-link" to="/admin/tables.html">
                    <i className="fas fa-fw fa-table" />
                    <span>Tables</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/admin/category">
                    <i className="fas fa-fw fa-table" />
                    <span>Category</span>
                </Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" />
            </div>
        </ul>
    )
}
