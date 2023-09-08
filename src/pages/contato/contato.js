import React from "react";
import './styles.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";


function Contato() {
    return (
        <>
            < Header />
                < div className="box-contact">
                    < section >
                        <h2>Contato</h2>
                            <form action="./contato" method="post" >

                                <label>Nome</label>
                                    <input type="text" name="name" placeholder="Digite seu nome"/>

                                <label>Email</label>
                                    <input type="email" name="email" placeholder="Digite seu email"/>

                                <label>Mensagem</label>
                                    <textarea name="Mensagem" cols="30" rows="10" placeholder="Digite seu Mensagem"></textarea>

                                <button>Enviar</button>
                            </form>
                    </section>
                </div>
            < Footer />
        </>
    )
}       
  


export default Contato