
import './index.css';
import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import logo from '../../images/logo.svg';
import ranking from '../../images/ranking.svg';


const Home = () => {
    
        const [goToGame, setGoToGame] = useState(false);
        const [goToScore, setGoToScore] = useState(false);

        return (

            <div className="main-home">           

                {goToGame && <Redirect to="/game-screen" />}

                {goToScore && <Redirect to="/score" />}

                <img className="img-ranking" src={ranking} alt="ranking image" 
                     onClick={() => setGoToScore(true)} />

                <img src={logo} alt="Logo image" />

                <button onClick={() => setGoToGame(true)} >Iniciar Jogo</button>

            </div>
        );
    
}

export default Home;