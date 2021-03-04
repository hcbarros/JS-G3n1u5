import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';

import Home from './screens/home/home';
import GameScreen from './screens/game-screen/game-screen';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/game-screen" component={GameScreen} />
        </Switch>  
     </BrowserRouter>   
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
