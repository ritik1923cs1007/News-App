import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div >
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/">About</Link>
                        </li>
                            <li className="nav-item">
                        <Link className="nav-link" to="/health">health</Link></li>
                            <li className="nav-item">
                        <Link className="nav-link" to="/general">general</Link></li>
                            <li className="nav-item">
                        <Link className="nav-link" to="/buisness">buisness</Link></li>
                            <li className="nav-item">
                        <Link className="nav-link" to="/sports">sports</Link></li>
                            <li className="nav-item">
                        <Link className="nav-link" to="/entertainment">entertainment</Link></li>
                            <li className="nav-item">
                        <Link className="nav-link" to="/science">science</Link></li>
                            <li className="nav-item">
                        <Link className="nav-link" to="/technology">technology</Link></li>
                    
                        <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/">Action</Link></li>
                            <li><Link className="dropdown-item" to="/">Another action</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                        </ul>
                        </li>
                        
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>  
        </div>
        )
    }
}
