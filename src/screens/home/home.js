
import './index.css';
import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import Sounds from '../../sounds/sounds';
import logo from '../../images/logo.svg';
import ranking from '../../images/ranking.svg';


const Home = () => {
    
        const [goToGame, setGoToGame] = useState(false);
        const [goToScore, setGoToScore] = useState(false);

        return (

            <div data-testid="mainHome" className="main-home">           

                {goToGame && <Redirect to="/game-screen" />}

                {goToScore && <Redirect to="/score" />}

                <img data-testid="imgRanking" className="img-ranking" src={ranking} alt="ranking image" 
                     onClick={() => {
                         Sounds.clickSound(); 
                         setGoToScore(true);
                     }} />

                <img src={logo} alt="Logo image" />

                <button onClick={() => {
                            Sounds.clickSound(); 
                            setGoToGame(true);
                        }} >Iniciar Jogo</button>
                        
            </div>
        );
    
}

export default Home;