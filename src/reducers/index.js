import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

//import each reducer to combine
import sean from './seanReducer';

const rootReducer = combineReducers({
  sean, routing: routerReducer
});

export default rootReducer;
