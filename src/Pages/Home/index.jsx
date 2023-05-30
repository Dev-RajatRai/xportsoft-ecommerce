import React from "react";
import Header from "../../Layout/Header";
import Navbar from "../../Layout/Navbar";
import Card from "../../Components/Cards";
import Slider from "../../Components/Slider";
import Demo from "../../Components/Demo";

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Card />
            <Slider />
            <Demo />
        </>
    )
}

export default Home;