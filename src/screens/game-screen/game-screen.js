
import './index.css';
import React,{useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import loader from '../../images/loader.webp';


export default function GameScreen () {    

        const [redirect, setRedirect] = useState(false);
        const [numbers, setNumbers] = useState([]);
        const [number, setNumber] = useState(0);
        const [points, setPoints] = useState(0);
        const [showNumber, setShowNumber] = useState(false);
        const [showLoader, setShowLoader] = useState(false);
        const [count, setCount] = useState(0);
        const [changeNumber, setChangeNumber] = useState(false);
        const [gameOver, setGameOver] = useState(false);


        const clickButton = (n) => {

            if(numbers[count] != n) {

                new Promise((resolve,reject) => {       
                    setGameOver(true);  
                    setTimeout(() => {
                        resolve(setShowLoader(true));
                        reject("Error: promise rejected!");
                    }, 1500);                                
                })
                .then(() => setTimeout(() => setRedirect(true), 1000))    
                .catch((error) => console.log(`Error promise: ${error}`));                
            }

            else if((count+1) >= numbers.length) {
                
                setPoints(p => p + 1);
                getLoader();
            }           

            else {
                setPoints(p => p + 1);
                setCount(c => c + 1);
            }
        }
  

        const sortNumber = () => {
            const sort = Math.floor((Math.random() * 9) + 1);
            numbers.push(sort);
            setNumbers(numbers);     
            setCount(0);
        }

        const getLoader = () => {            
           
            new Promise((resolve,reject) => {
                sortNumber();       
                setShowNumber(false);     
                setShowLoader(true);                
                setTimeout(() => {
                    setNumber(numbers[0]);
                    resolve(setShowLoader(false));
                    reject("Error: promise rejected!");
                }, 1000);                                
            })
            .then(() => setChangeNumber(c => !c))    
            .catch((error) => console.log(`Error promise: ${error}`));          
        }

        useEffect(() => {                   
             
            setShowNumber(x => !x);
            const time = count == 0 ? 0 : 300;

            const timeout = setTimeout(() => {    

                if((timeout != 1) && showNumber && (count < numbers.length)) {                                        
                    setNumber(numbers[count]);
                    setCount(x => x + 1);               
                }
                if(count >= numbers.length) {
                    setShowNumber(false);
                    setCount(0);
                }
                if(timeout != 1 && count < numbers.length) setChangeNumber(c => !c);                
                
            }, time);    

            if(timeout == 1) getLoader();                       
             
        },[changeNumber]);



        return (

            <div className="main-game">           

                {redirect && <Redirect to="/" />}
                
                <div>
                    <div className={gameOver ? "game-over" : "hide"}>
                        <a>Fim de jogo!!</a>
                        <img className={showLoader ? "loader" : "hide"} src={loader} alt="image loader" />  
                    </div> 
                </div>                                        
                    

                <div className={gameOver ? "hide" : "shower"}>
                    <img className={!showLoader ? "hide" : ""} src={loader} alt="image loader" />
                    {showNumber ? number : null}                         
                </div>

                <div className={gameOver ? "hide" : "wrapper"}>
                    {[1,2,3,4,5,6,7,8,9].map((x) => 
                        <button disabled={showNumber || showLoader} className="btn" 
                        onClick={() => clickButton(x)}>{x}</button>
                    )}
                </div>                

            </div>
        );
    
}
