import { createStore, compose, applyMiddleware } from "redux";
import reducer from './reducers';
import { save, load } from 'redux-localstorage-simple';

const reduxCreateStore = ()=> createStore(
    reducer, 
    load(), 
    compose(
        /*window.devtoolsExtension ? window.devtoolsExtension() : f => f*/
        /*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
    )
);

export default applyMiddleware(
    save()
)(reduxCreateStore);