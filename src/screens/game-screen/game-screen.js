
import './index.css';
import React,{useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import Sounds from '../../sounds/sounds';
import loader from '../../images/loader.webp';


export default function GameScreen () {    

        const [redirect, setRedirect] = useState(false);
        const [init, setInit] = useState(true);
        const [numbers, setNumbers] = useState([]);
        const [number, setNumber] = useState(0);
        const [points, setPoints] = useState(0);
        const [showNumber, setShowNumber] = useState(false);
        const [showLoader, setShowLoader] = useState(false);
        const [disable, setDisable] = useState(false);
        const [count, setCount] = useState(0);
        const [changeNumber, setChangeNumber] = useState(false);


        const clickButton = (n) => {

            if(numbers[count] != n) {                
                setRedirect(true);                                
            }

            else if((count+1) >= numbers.length) {                
                setPoints(p => p + 1);
                getLoader();
            }           

            else {
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
                setDisable(true);
                setInit(false);
                setShowNumber(false);     
                setShowLoader(true);                
                setTimeout(() => {
                    setNumber(numbers[0]);
                    resolve(setShowLoader(false));
                    reject("Promise game rejected!");
                }, 1000);                                
            })
            .then(() => setChangeNumber(c => !c))    
            .catch((error) => console.log(`Error promise game: ${error}`));          
        }

        useEffect(() => {                   
             
            setShowNumber(x => !x);            
    
            const time = count == 0 ? 0 : 300;

            setTimeout(() => {    

                if(!init && showNumber && (count < numbers.length)) {                                        
                    setNumber(numbers[count]);
                    Sounds.dtmfSound(numbers[count]);
                    setCount(x => x + 1);               
                }
                if(count >= numbers.length) {
                    setShowNumber(false);
                    setCount(0);
                    setDisable(false);
                }
                if(!init && count < numbers.length) setChangeNumber(c => !c);                
                
            }, time);    

            if(init) getLoader();                   
             
        },[changeNumber]);


        return (

            <div data-testid="test-game" className="main-game">           

                {redirect && 
                    <Redirect to={
                        {
                            pathname:'/game-over', 
                            state: {points: points}
                        }
                    } />
                }
                
                <div className="shower">
                    <img className={!showLoader ? "hide" : ""} src={loader} alt="image loader" />
                    {showNumber ? number : null}                         
                </div>

                <div className="wrapper">
                    {[1,2,3,4,5,6,7,8,9].map((x) => 
                        <button key={x} disabled={disable} className="btn" 
                        onClick={() => {
                            Sounds.dtmfSound(x);
                            clickButton(x);
                        }}>{x}</button>
                    )}
                </div>                

            </div>
        );

}
