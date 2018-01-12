import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer, {reducer} from './reducers/index';

const middlewares = [thunk]

export default function configureStore(initialState) {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middlewares),
    reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );
  } 
  
