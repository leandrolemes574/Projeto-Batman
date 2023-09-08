import React from "react";
import Header from "../../components/header/header";
import './comentarios.css';
import Footer from "../../components/footer/footer";



function Comentarios(){

    return (
        <>
            <Header />

                <div className="comment-section">
                    <div className="comment">
                        <div className="user">Usuário 1</div>
                        <div className="timeStamp">04/09/2023 17:50</div>
                        <div className="content">Este é um comentário de exemplo</div>
                    </div>
                </div>

                <div className="comment-section">
                    <div className="comment">
                        <div className="user">Usuário 2</div>
                        <div className="timeStamp">04/09/2023 17:52</div>
                        <div className="content">Outro comentário de exemplo</div>
                    </div>
                </div>
    
    
                <div className="comment-form">
                    <h2>Deixe seu comentário</h2>
                        <textarea placeholder="Digite seu comentário"></textarea>
                    <button>Enviar</button>

                </div>
                
            <Footer />
        </>
    )
}

export default Comentarios
