import React from 'react';

function HeaderRepository(props) {

    return (
        <aside key={props.id} className="header-repository">
            <header className="header-title">
                <h2><a className="color-s-light" href={props.url} target="_blank" rel="noreferrer">{props.name}</a></h2>
            </header>
            <article className="header-description">
                <p className="color-s-light">{props.description}</p>
            </article>
        </aside>
    )
}

export default HeaderRepository;