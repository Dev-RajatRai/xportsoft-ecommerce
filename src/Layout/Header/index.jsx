import React from "react";
import a_slide from "../../Assets/Images/header1.jpg"
import b_slide from "../../Assets/Images/header2.jpg"
import c_slide from "../../Assets/Images/header3.jpg"
import d_slide from "../../Assets/Images/header4.jpg"

const Header = () => {
    console.log(a_slide, b_slide, c_slide, d_slide);

    return (
        <header className="container">

            <div className="header-bg">
                <div className="h-bg"></div>
                <div className="h-bg"></div>
                <div className="h-bg"></div>
                <div className="h-bg"></div>
            </div>

            <section className="header d-grid">

                <div className="h-slider">
                    <div className="slides">
                        <img src={a_slide} alt="Slider" />
                    </div>

                    <div className="slides">
                        <img src={b_slide} alt="Slider" />
                    </div>

                    <div className="slides">
                        <img src={c_slide} alt="Slider" />
                    </div>

                    <div className="slides">
                        <img src={d_slide} alt="Slider" />
                    </div>
                </div>


                <div className="h-offers">
                    <div className="d-month">

                    </div>
                    <div className="d-week">

                    </div>
                    <div className="d-day">

                    </div>
                </div>

            </section>
        </header>
    )
}

export default Header;