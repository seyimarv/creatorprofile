import { createStore, applyMiddleware } from 'redux';
// import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './Rootreducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));


export default store;
