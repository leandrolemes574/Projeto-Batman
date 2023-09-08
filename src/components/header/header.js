import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Logo from '../../assets/logobatman.jfif'

    function Header () {

    return (
        <>
        <header>
            <img id="Logo" alt='' src={Logo} />
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                    <li>Home</li>
                    </Link>

                    <Link style={{textDecoration: 'none'}} to='/Contato'>
                    <li>Contatos</li>
                    </Link>

                    <Link style={{textDecoration: 'none'}} to='/Fotos'>
                    <li>Fotos</li>
                    </Link>

                    <Link style={{textDecoration: 'none'}} to='/Comentarios'>
                    <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </header>
        </>
    )
 }

 export default Header
 

