import React from "react";
import logo from '../../Assets/Images/logo-white-2.png'

const Navbar = () => {
    return (
        <nav>
            {/* Navbar */}
            <section className="navbar">
                {/*     TOP NAVBAR       */}
                <div className="d-grid top-nav">

                    <div className="logo">
                        <img src={logo} alt="XPORTSOFT" />
                    </div>

                    <div className="location">
                        <span className="location">India</span>
                    </div>

                    <div className="searchBar d-flex">
                        <span>All 	&#129171;</span>
                        <input type="search" placeholder="search" />
                        <button type="submit" className="btn search"></button>
                    </div>

                    <div className="cart j-center">
                        <div className="cart-icon"></div>
                        <span className="cart-unit">0</span>
                    </div>

                    <div className="cart j-center">
                        <div className="cart-icon"></div>
                        <span className="cart-unit">0</span>
                    </div>

                    <div className="user j-center">

                        <div className="user-details">
                            <p className="details">Hello, user</p>
                        </div>

                    </div>

                </div>

                <div className=" bottom-nav d-grid">

                    <div className="menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="d-grid nav-links">

                        <ul>

                            <li className="nav-link">Apparels</li>

                            <li className="nav-link">Men's</li>

                            <li className="nav-link">Women's</li>

                            <li className="nav-link">Gadgets</li>

                            <li className="nav-link">Electronics</li>

                            <li className="nav-link">Kitchen</li>

                            <li className="nav-link">Decoration</li>

                            <li className="nav-link">Kids</li>

                            <li className="nav-link">Top Deals</li>

                        </ul>
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default Navbar;