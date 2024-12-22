import React from "react";
import ImgCard from "../card";
import FPS1 from "../images/Fps/FPSimage1.jpg"
import FPS2 from "../images/Fps/FPSimage2.jpg"
import FPS3 from "../images/Fps/FPSimage3.jpg"
import FPS4 from "../images/Fps/FPSimage4.jpg"
import FPS5 from "../images/Fps/FPSimage5.png"
import RPG1 from "../images/Rpg/RPGimage1.jpg"
import RPG2 from "../images/Rpg/RPGimage2.jpg"
import RPG3 from "../images/Rpg/RPGimage3.jpg"
import RPG4 from "../images/Rpg/RPGimage4.jpg"
import RPG5 from "../images/Rpg/RPGimage5.png"
import '../index.css'

const Products = function(){
    return(
        <>
        <header className="Header">
            <h1 className="headertitle">Products</h1>
        <h2 className="containername">First Person Shooter</h2>
        </header>
        <section className="container">
            <ImgCard image={FPS1} cardtext="PRiCE: $29.99" />
            <ImgCard image={FPS2} cardtext="PRiCE: $29.99" />
            <ImgCard image={FPS3} cardtext="PRiCE: $59.99" />
            <ImgCard image={FPS4} cardtext="PRiCE: $49.99" />
            <ImgCard image={FPS5} cardtext="PRiCE: $29.99" />
        </section>
        <header className="Header">
        <h2 className="containername">Role Playing Game</h2>
        </header>
        <section className="container">
            <ImgCard image={RPG1} cardtext="PRiCE: $29.99" />
            <ImgCard image={RPG2} cardtext="PRiCE: $29.99" />
            <ImgCard image={RPG3} cardtext="PRiCE: $59.99" />
            <ImgCard image={RPG4} cardtext="PRiCE: $49.99" />
            <ImgCard image={RPG5} cardtext="PRiCE: $29.99" />
        </section>
        
        </>
    )
}

export default Products