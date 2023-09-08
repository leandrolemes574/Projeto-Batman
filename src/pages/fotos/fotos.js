import React from "react";
import './fotos.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";


function Fotos() {

    return (
    <>
        < Header />
        <p className="galery">
            Galeria de fotos
        </p>
    
    <div className="fotos-container">
        <div className="fotos-content">
            <div className="card banner1"></div>
            <div className="card banner2"></div>
            <div className="card banner3"></div>
            <div className="card banner4"></div>
            <div className="card banner5"></div>
            <div className="card banner6"></div>
            <div className="card banner7"></div>
            <div className="card banner8"></div>
            <div className="card banner9"></div>
            <div className="card banner10"></div>
            <div className="card banner11"></div>
            <div className="card banner12"></div>
        </div>
    </div>
        < Footer />
    </>
    )
}

export default Fotos
