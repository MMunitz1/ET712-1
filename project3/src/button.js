import React from "react";
import Modalwindow from "./modalwindow";

const ATCbutton = function (props) {
    const openmodalwindow = () => {
        const modalwindow = document.querySelector(".modalwindow")
        modalwindow.style.display = "block;"
    }


return(
    <>
    <div className="Gamecontainer">
        <button className="atcbutton" onClick={openmodalwindow}>Add to Cart</button>
    </div>
    <Modalwindow /> </>
)
}
export default ATCbutton