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

                    <div className="logo cp">
                        <img src={logo} alt="XPORTSOFT" />
                    </div>

                    <div className="location">
                        <span className="location cp">Haryana, India</span><br />
                        <sub>Free Delivery Available.</sub>
                    </div>

                    <div className="searchBar d-flex">
                        <span className="cp">All </span>
                        <input type="search" placeholder="search" />
                        <button type="submit" className="btn search"></button>
                    </div>

                    <div className="language-selector cp d-flex d-center">
                        <span className="lang ">EN</span>
                        <div className="icon">&#9662;</div>
                    </div>

                    <div className="cart d-center d-flex">
                        <div className="icon">
                            <img src={cart} alt="user cp" />
                        </div>
                        <span className="cart-unit cp">0</span>
                    </div>

                    <div className="user d-center">

                        <div className="user-details d-flex">
                            <div className="icon">
                                <img src={user} alt="user" />
                            </div>
                            <p className="details cp">Hello, user</p>
                        </div>

                    </div>

                </div>

                <div className=" bottom-nav d-grid">

                    <div className="menu cp">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="nav-links">

                        <ul>

                            <li className="nav-link cp">Apparels</li>

                            <li className="nav-link cp">Men's</li>

                            <li className="nav-link cp">Women's</li>

                            <li className="nav-link cp">Gadgets</li>

                            <li className="nav-link cp">Electronics</li>

                            <li className="nav-link cp">Kitchen</li>

                            <li className="nav-link cp">Decoration</li>

                            <li className="nav-link cp">Kids</li>

                            <li className="nav-link cp">Foot Wear</li>

                            <li className="nav-link cp">Top Deals</li>

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