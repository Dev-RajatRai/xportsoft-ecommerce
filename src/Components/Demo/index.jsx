import React from "react";
import imgs from "../../Assets/Images/header1.jpg"
const Demo = () => {
    return (
        <>
            <section className=" container">
                <div className="demo-container">
                    <div className="left-Container">
                        <img src={imgs} alt="" />
                    </div>
                    <div className="right-Container">
                        <img src={imgs} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Demo;