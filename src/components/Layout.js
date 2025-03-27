import React from "react";
import { Link } from "react-router-dom";

function Layout({children}) 
{
    return (
         <div className="container mt-4">
            <h3 className="text-center mb-4">To-Do List</h3>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    
                    <Link className="navbar-brand" to="/">List Manager</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto mb-lg-0">
                        <li class="nav-item">
                            <Link className="nav-link" to="/"> Home </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/add"> Add Item </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/contact"> Contact </Link>
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