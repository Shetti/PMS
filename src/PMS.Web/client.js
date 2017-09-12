import "babel-polyfill";
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './Route/routes';


const rootContainer = document.getElementById('root');

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  rootContainer
);


