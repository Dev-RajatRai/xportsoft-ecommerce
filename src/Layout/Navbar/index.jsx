import React from "react";
import logo from '../../Assets/Images/logo-white-2.png';
import user from '../../Assets/Images/user.png';
import cart from '../../Assets/Images/cart.png';

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
                        <span className="location">Haryana, India</span><br />
                        <sub>Free Delivery Available.</sub>
                    </div>

                    <div className="searchBar d-flex">
                        <span>All </span>
                        <input type="search" placeholder="search" />
                        <button type="submit" className="btn search"></button>
                    </div>

                    <div className="language-slector j-center">
                        <span className="lang">EN</span>
                        <div className="icon"></div>
                    </div>

                    <div className="cart j-center d-flex">
                        <div className="icon">
                            <img src={cart} alt="user" />
                        </div>
                        <span className="cart-unit">0</span>
                    </div>

                    <div className="user j-center">

                        <div className="user-details d-flex">
                            <div className="icon">
                                <img src={user} alt="user" />
                            </div>
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

                    <div className="nav-links">

                        <ul>

                            <li className="nav-link">Apparels</li>

                            <li className="nav-link">Men's</li>

                            <li className="nav-link">Women's</li>

                            <li className="nav-link">Gadgets</li>

                            <li className="nav-link">Electronics</li>

                            <li className="nav-link">Kitchen</li>

                            <li className="nav-link">Decoration</li>

                            <li className="nav-link">Kids</li>

                            <li className="nav-link">Foot Wear</li>

                            <li className="nav-link">Top Deals</li>

                        </ul>
                    </div>

                    <div className="fav-section d-grid">
                        <div className="fav">
                            <p>My Favorite</p>
                        </div>
                        <div className="deals ">
                            <p>Today's Best Deals</p>
                        </div>
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default Navbar;