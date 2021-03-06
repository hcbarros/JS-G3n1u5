
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

            const time = setTimeout(() => {    

                if((time != 1) && showNumber && (count < numbers.length)) {                                        
                    setNumber(numbers[count]);
                    setCount(x => x + 1);               
                }
                if(count >= numbers.length) {
                    setShowNumber(false);
                    setCount(0);
                }
                if(time != 1 && count < numbers.length) setchangeNumber(!changeNumber);                
                
            }, count == 0 ? 0 : 300);    

            if(time == 1) getLoader(1000, true);                       
             
        },[changeNumber]);



        return (

            <div className="main-game">           

                <div className="shower">
                    <img className={!showLoader ? "hide" : ""} src={loader} alt="image loader" />
                    {showNumber ? number : null} 
                        
                </div>

                <div className="wrapper">
                    <button className="btn b-right b-bottom" onClick={() => checkButton(1)}>1</button>
                    <button className="btn b-right b-bottom" onClick={() => checkButton(2)}>2</button>
                    <button className="btn b-bottom" onClick={() => checkButton(3)}>3</button>
                    <button className="btn b-right b-bottom" onClick={() => checkButton(4)}>4</button>
                    <button className="btn b-right b-bottom" onClick={() => checkButton(5)}>5</button>
                    <button className="btn b-bottom" onClick={() => checkButton(6)}>6</button>
                    <button className="btn b-right" onClick={() => checkButton(7)}>7</button>
                    <button className="btn b-right" onClick={() => checkButton(8)}>8</button>
                    <button className="btn" onClick={() => checkButton(9)}>9</button>
                </div>                

            </div>
        );
    
}
