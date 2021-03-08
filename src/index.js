import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';

import Home from './screens/home/home';
import GameScreen from './screens/game-screen/game-screen';
import GameOver from './screens/game-over/game-over';
import ScoreScreen from './screens/score-screen/score-screen';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/game-screen" component={GameScreen} />
            <Route path="/game-over" component={GameOver} />
            <Route path="/score" component={ScoreScreen} />
        </Switch>  
     </BrowserRouter>   
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
