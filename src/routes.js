import React from 'react';
import {Route, IndexRoute} from 'react-router';

//import components
import App from './components/App';
import MainPage from './components/main/MainPage';
import SeanPage from './components/sean/SeanDeathsPage';
import NotFoundPage from './components/common/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route component={SeanPage} path="/sean" />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
