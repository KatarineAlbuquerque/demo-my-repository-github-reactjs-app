import React from 'react';

function HeaderUser(props) {
    return (
        <header id="header-user">
            <img src={props.url} alt="Imagem User" />
            <h2 className="color-p-dark">Katarine Albuquerque</h2>
            <h3 className="color-black">{props.login}</h3>
            <p className="color-black">Desenvolvedora Front-end, formada em Análise e Desenvolvimento de Sistemas e Pós-graduada em Desenvolvimento Java.</p>
        </header>
    )
}

export default HeaderUser;