
import './index.css';
import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import logo from '../../images/logo.svg';
import ranking from '../../images/ranking.svg';


const Home = () => {
    
        const [redirect, setRedirect] = useState(false);

        return (

            <div className="main-home">           

                {redirect && <Redirect to="/game-screen" />}

                <img src={ranking} alt="ranking image" />

                <img src={logo} alt="Logo image" />

                <button onClick={() => setRedirect(true)} >Iniciar Jogo</button>

            </div>
        );
    
}

export default Home;