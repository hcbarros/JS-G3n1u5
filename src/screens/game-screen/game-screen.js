
import './index.css';
import React,{useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import loader from '../../images/loader.webp';


export default function GameScreen () {    

        const [redirect, setRedirect] = useState(false);
        const [numbers, setNumbers] = useState([]);
        const [number, setNumber] = useState(0);
        const [showNumber, setShowNumber] = useState(true);
        const [showLoader, setShowLoader] = useState(false);
        const [count, setCount] = useState(0);
        const [changeNumber, setchangeNumber] = useState(false);


        const checkButton = (n) => {
                
            setNumbers([1,2,3,4,5,6,7])
            setchangeNumber(true);
            
            // if(count >= numbers.length) {
            //     let sort = Math.floor(Math.random() * 9 + 1);
            //     numbers.push(sort);
            //     setNumbers(numbers);
                
            //     setNumber(sort);          
            //     setCount(0);   
            // }

            // else if(numbers[count] != n) {

            //     //GAME OVER
            // }

            // else setCount(count+1);
        }
  

        const sortNumber = () => {
            const sort = Math.floor(Math.random() * 9 + 1);
            numbers.push(sort);
            setNumbers(numbers);
            setNumber(sort);          
            setCount(0);
        }

        const getLoader = (time, show) => {            
           
            new Promise((res,rej) => {
                sortNumber();            
                setShowLoader(true);
                setTimeout(() => res(setShowLoader(false)), time);                
            })
            .then(() => {
                if(!show) return;
                setShowNumber(true);
                setTimeout(() => setShowNumber(false), 300)
            });              
        }

        useEffect(() => {           

            setShowNumber(x => !x);

            const time = setTimeout(() => {    

                if(time > 1 && showNumber) {                                                         
                    setNumber(x => numbers[count])
                    if(count < numbers.length + 1) {
                        setCount(x => x + 1)                                                                       
                    }                                                
                }
                if(time > 1) setchangeNumber(x => !x);
                else setShowNumber(false);
                
            }, 300);    

            if(time == 1) getLoader(1000, false);            
             
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
