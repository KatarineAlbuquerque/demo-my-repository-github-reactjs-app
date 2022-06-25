import React, { useEffect, useState } from 'react';
import '../assets/css/index.css'
import '../assets/css/mobile.css'
import axios from 'axios';
import HeaderUser from '../components/header/user/HeaderUser';
import HeaderRepository from '../components/header/repository/HeaderRepository';


function Home() {

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get('https://api.github.com/users/KatarineAlbuquerque/repos')
            .then((response) => {
                var data = response.data
                setPost(data)
            })
        post.sort()
    }, [post])

    return (
        <div id="page" className="bg-s-light">
            <header id="header-home" className="bg-s-light">
                <h1 className="color-black">Repositórios</h1>
                <section id="header-content">
                   <HeaderUser name={"Katarine Albuquerque"} url={'https://avatars.githubusercontent.com/u/95772817?v=4'} login={"KatarineAlbuquerque"}/> 
                </section>
            </header>
            <section id="header-repositories" className="bg-p-dark">
                {post.map((item) => {
                    return(
                        <HeaderRepository key={item.id} url={item.html_url} name={item.name} description={item.description} />                        
                    )                    
                })}
            </section>
        </div>
    )
}

export default Home;
