import React from "react";
import './index.css'

const Modalwindow = function(props) {
    const closemodalwindow = () => {
        const modalwindow = document.querySelector(".modalwindow")
        modalwindow.style.display = "none";
    }
    return (
        <>
        <section className="modalwindow">
            <div className="modalcontent">
                <header className="modalheader">
                    <p className="closemodal" onClick={closemodalwindow}>&#x58;</p>
                </header>
                <main className="modalbody">
                    <a><img src={props.image}/></a>
                    <a>{props.Gameinfo}</a>
                    <a>{props.cardtext}</a>
                </main>
            </div>
        </section>
        </>
    )
}

export default Modalwindow