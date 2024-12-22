import React from "react";
import {  Link } from "react-router-dom";

const Navbars = function(){
    return (
      <>
      <nav className="navbar">
    <div>
      <div className="btngroup">
        <button><Link to="/">Home</Link> </button>
        <button><Link to="/products">Games</Link> </button>
        <button><Link to="/About"></Link>About</button>
        <button><Link to="/cart"></Link>See cart</button>
      </div>
    </div>
    </nav>
    </>
    );
  }

  export default Navbars;