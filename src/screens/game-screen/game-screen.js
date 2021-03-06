
import './index.css';
import React,{useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import loader from '../../images/loader.webp';


export default function GameScreen () {    

        const [redirect, setRedirect] = useState(false);
        const [numbers, setNumbers] = useState([]);
        const [number, setNumber] = useState(0);
        const [showNumber, setShowNumber] = useState(false);
        const [showLoader, setShowLoader] = useState(false);
        const [count, setCount] = useState(0);
        const [changeNumber, setchangeNumber] = useState(false);


        const checkButton = (n) => {

            if(numbers[count] != n) {

                alert("Voce perdeu o jogo!")
                //GAME OVER
            }

            else if((count+1) >= numbers.length) {
                
                getLoader(1000,false)
            }           

            else setCount(count+1);
        }
  

        const sortNumber = () => {
            const sort = Math.floor(Math.random() * 9 + 1);
            numbers.push(sort);
            setNumbers(numbers);     
            setCount(0);
        }

        const getLoader = (time, show) => {            
           
            new Promise((res,rej) => {
                sortNumber();       
                setShowNumber(false);     
                setShowLoader(true);
                setTimeout(() => res(setShowLoader(false)), time);                                
            })
            .then(() => {
                setNumber(numbers[0]);
                if(!show) setchangeNumber(!changeNumber);
                else {                                        
                    setShowNumber(true);
                    setTimeout(() => setShowNumber(false), 300);
                }
            });              
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
                if(timeout != 1 && count < numbers.length) setchangeNumber(!changeNumber);                
                
            }, time);    

            if(timeout == 1) getLoader(1000, true);                       
             
        },[changeNumber]);


        return (

            <div className="main-game">           

                <div className="shower">
                    <img className={!showLoader ? "hide" : ""} src={loader} alt="image loader" />
                    {showNumber ? number : null}                         
                </div>

                <div className="wrapper">
                    {[1,2,3,4,5,6,7,8,9].map((x) => 
                        <button disabled={showNumber || showLoader} className="btn" 
                        onClick={() => checkButton(x)}>{x}</button>
                    )}
                </div>                

            </div>
        );
    
}
