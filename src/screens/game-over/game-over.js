
import './index.css';
import React,{useState, useEffect, useRef} from 'react';
import {Redirect} from 'react-router-dom';
import Sounds from '../../sounds/sounds';
import close from '../../images/close.svg';
import axios from 'axios';


export default function GameOver() {
    
        const [hideScreen, setHideScreen] = useState(false);
        const [goHome, setGoHome] = useState(false);
        const [goScore, setGoScore] = useState(false);
        const [init, setInit] = useState(true);
        const [load, setLoad] = useState(false);
        const [points, setPoints] = useState(0);
        const [alert, setAlert] = useState(false);
        const input = useRef(null);

        const buttonSend = async () => {            

            if(!/\S/.test(input.current.value)) {
                input.current.value = "";
                setAlert(true);
                return;
            }

            setInit(true);
            setLoad(true);

            axios.post("https://us-central1-prova-front-letras.cloudfunctions.net/save", {
                    name: input.current.value,
                    score: points
                 })
                 .then((resp) => {
                    setGoScore(true);
                 })
                 .catch((err) => {
                    console.log(`Error in post request: ${err}`);
                 });            
        }

        const buttonClose = () => {        
               
                setHideScreen(true);
                setTimeout(() => setGoHome(true), 400);                                
        }


        const handleKeyPress = (event) => setAlert(false);
                  

        useEffect(() => {   
            
            setPoints(parseInt(localStorage.getItem("points")));

            new Promise((resolve,reject) => {           
                setTimeout(() => {                    
                    resolve(setLoad(true));
                    reject("Promise game over rejected!");
                }, 1000);                                
            })
            .then(() => setTimeout(() => {
                            setLoad(false);
                            setInit(false);
                        },1000)
            )    
            .catch((error) => console.log(`Error game over: ${error}`));          
                                                        
        },[]);


        return (

            <div className={hideScreen ? "main-over hideScreen" : "main-over"}>         

                {goHome && <Redirect to="/" />}  
                {goScore && <Redirect to="/score" />}

                <img onClick={() => {
                        Sounds.clickSound(); 
                        buttonClose();
                     }} 
                className="animation btnClose" src={close} alt="ranking image" />

                <a className="end-game-text animation">Fim do Jogo</a>

                <div className={load ? "loader" : "hide"}></div>

                <a className={init ? "hide" : "animation score-text"}>score</a>

                <a className={init ? "hide" : "animation score-value"}>{points}</a>

                <input className={init ? "hide" : (alert ? "animation alert" : "animation")} 
                       ref={input} onKeyPress={handleKeyPress} type="text" placeholder="Digite seu nome"/>

                <button className={init ? "hide" : "animation"}
                        onClick={() => {
                            Sounds.clickSound(); 
                            buttonSend();
                        }} >Salvar Ranking</button>
            
            </div>
        );
    
}
