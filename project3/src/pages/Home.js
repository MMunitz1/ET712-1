import React from "react";
import image1 from "../images/Home/project3homepageimage1.webp"
import '../index.css'

const Home = function(){
    return(
        <>
        <header className="Header">
            <h1 className="headtitle">Welcome to Matt's Games and +</h1>
            <img src={image1}></img>
        </header>
        </>
    )
}
export default Home