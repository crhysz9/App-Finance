import React from 'react'
import Logo from '../assets/financec.png'

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <a className="navbar-brand" href="index.html">
                        <img src={Logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/> FINANCE
                    </a>
                    <ul className="navbar-nav d-flex flex-row gap-3 ms-5 ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Despesas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Lucros</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Navbar