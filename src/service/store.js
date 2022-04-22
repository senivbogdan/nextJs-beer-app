import * as api from './api';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducer from '../reducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const createReduxStore = () => {
    return createStore(reducer, composeEnhancers(applyMiddleware(thunk.withExtraArgument(api))));
};

export default createReduxStore;