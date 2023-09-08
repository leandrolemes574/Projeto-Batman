import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Logo from '../../assets/logobatman.jfif'

    function Footer () {

    return (
        <>
        <footer>
            <img id="Logo" alt="" src={Logo} />
                <span> Todos os direitos reservados © </span>
                <span> Desenvolvido por: Leandro Lemes </span>
                
            <nav className="footer-container">
                <ul className="footer-list">
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
        </footer>
        </>
    )
 }

 export default Footer
 

