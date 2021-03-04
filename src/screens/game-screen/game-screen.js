
import './index.css';
import React,{useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import loader from '../../images/loader.webp';


export default function GameScreen () {    

        const [redirect, setRedirect] = useState(false);
        const [numbers, setNumbers] = useState([]);
        const [number, setNumber] = useState(0);
        const [show, setShow] = useState(false);
        const [count, setCount] = useState(0);


        const showNumbers = (n) => {
            let sort = Math.floor(Math.random() * 9 + 1);
            numbers.push(sort);
            setNumbers(numbers);
            
            setNumber(sort);          
            setCount(0);   
        }

        const getNumbers = (index) => {

            const value = numbers[index];
            setNumber(value);            
        }

        useEffect(() => {
               
            const timeout = setTimeout(() => {    
                if(count < numbers.length) {                    
                    getNumbers(count);                    
                    setCount(count+1);
                }
            }, 1000);
        
            return () => clearTimeout(timeout);
            
            
        });

        return (

            <div className="main-game">           

                <div className="shower">
                    <img className={"hide"} src={loader} alt="image loader" />
                    {number}
                </div>

                <div className="wrapper">
                    <button className="btn b-right b-bottom" onClick={() => showNumbers(1)}>1</button>
                    <button className="btn b-right b-bottom" onClick={() => showNumbers(2)}>2</button>
                    <button className="btn b-bottom" onClick={() => showNumbers(3)}>3</button>
                    <button className="btn b-right b-bottom" onClick={() => showNumbers(4)}>4</button>
                    <button className="btn b-right b-bottom" onClick={() => showNumbers(5)}>5</button>
                    <button className="btn b-bottom" onClick={() => showNumbers(6)}>6</button>
                    <button className="btn b-right" onClick={() => showNumbers(7)}>7</button>
                    <button className="btn b-right" onClick={() => showNumbers(8)}>8</button>
                    <button className="btn" onClick={() => showNumbers(9)}>9</button>
                </div>                

            </div>
        );
    
}
