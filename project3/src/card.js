import React from "react"
import './index.css'
import Modalwindow from "./modalwindow"

const ImgCard = function(props){
    const openmodalwindow = () => {
        const modalwindow = document.querySelector(".modalwindow")
        modalwindow.style.display = "block;"
    }
    return(
        <>
        <section className="card">
            <a><img src={props.image} alt="sorry fixing"/></a>
            <div className="gameTitle">
                <a className="cardText">{props.cardtext}</a>
            </div>
            <div className="add">
                <button className="Addtocart" onClick={openmodalwindow}>Add to Cart</button>
            </div>
        </section>
        <Modalwindow /> </>
    )
}

export default ImgCard