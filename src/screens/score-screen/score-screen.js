
import './index.css';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import logo from '../../images/logo.svg';
import arrow from '../../images/arrow.svg';
import loader from '../../images/loader.webp';


export default function ScoreScreen() {
    
        const [redirect, setRedirect] = useState(false);
        const [init, setInit] = useState(true);
        const [scores, setScores] = useState([]);
        const [loaded, setLoaded] = useState(false);


        useEffect(() => {   
            
                axios.get("https://us-central1-prova-front-letras.cloudfunctions.net/ranking")
                .then((resp) => {
                    resp.data.map((score) => scores.push(score));                  
                    setScores(scores);
                    setLoaded(true);
                })
                .catch((err) => {
                    alert(JSON.stringify(err))
                });                
                                                        
        },[init]);


        return (

            <div className="main-score">           

                <div className="header-ranking">

                    <img className="arrow-icon" src={arrow} alt="Arrow icon" />
                
                    <a className="ranking">Ranking</a>

                    <div />

                </div>

                <div className={!loaded ? "loader-ranking" : "hide"} >
                    <img src={loader} alt="Loader image" />
                </div>
               
                {loaded && scores.map((obj, index) => 
                    <div className="score">
                       <span>
                           <span>{index+1}</span>
                           <span>{obj.name}</span>
                       </span>
                       <span>{obj.score}</span>
                    </div>
                )}                    

            </div>
        );
    
}

