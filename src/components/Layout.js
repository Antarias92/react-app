import React from "react";
import { Link } from "react-router-dom";

function Layout({children}) 
{
    return (
         <div className="container mt-4 mx-auto bgNav">
            <h1 className="text-center mb-4 text-white">To-Do List</h1>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand logo text-white" to="/"> List Manager</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-white"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto mb-lg-0">
                            <li class="nav-item menu-item">
                                <Link className="nav-link text-white" to="/"> Home </Link>
                            </li>
                            <li className="nav-item menu-item">
                                <Link className="nav-link text-white" to="/add"> Add Item </Link>
                            </li>
                            <li className="nav-item menu-item">
                                <Link className="nav-link text-white" to="/Contact"> Contact </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {children}
         </div>   
    )
}

export default Layout;