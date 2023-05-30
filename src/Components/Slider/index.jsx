import React, { useRef, useEffect } from "react";
import slide1 from "../../Assets/Images/Card/SliderShoes/shoe1.jpg";
import slide2 from "../../Assets/Images/Card/SliderShoes/shoe2.jpg";
import slide3 from "../../Assets/Images/Card/SliderShoes/shoe3.jpg";
import slide4 from "../../Assets/Images/Card/SliderShoes/shoe4.jpg";
import slide5 from "../../Assets/Images/Card/SliderShoes/shoe5.jpg";
import slide6 from "../../Assets/Images/Card/SliderShoes/shoe6.jpg";
import slide7 from "../../Assets/Images/Card/SliderShoes/shoe7.jpg";
import slide8 from "../../Assets/Images/Card/SliderShoes/shoe8.jpg";

const Slider = () => {
    const refr = useRef();
    useEffect(() => {
        let keyword = refr.current.children;
        console.log(refr.current.children, keyword)
        setInterval(
            () => {
                // refr.current.children.push(keyword)
            }, 1000
        )

    }
        , []);
    return (
        <>
            <section id="Slider">
                <div className="slides">
                    <div className="slider-Heading">
                        Mans Shoes
                    </div>
                    <div className="slider-container" ref={refr}>
                        <div className="slider-image-container">
                            <img src={slide1} alt="slider1" />
                        </div>
                        <div className="slider-image-container">
                            <img src={slide2} alt="slider2" />
                        </div>
                        <div className="slider-image-container">
                            <img src={slide3} alt="slider3" />
                        </div>
                        <div className="slider-image-container">
                            <img src={slide4} alt="slider4" />
                        </div>
                        <div className="slider-image-container">
                            <img src={slide5} alt="slider5" />
                        </div>
                        <div className="slider-image-container">
                            <img src={slide6} alt="slider6" />
                        </div>
                        <div className="slider-image-container">
                            <img src={slide7} alt="slider7" />
                        </div>
                        <div className="slider-image-container">
                            <img src={slide8} alt="slider8" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Slider;