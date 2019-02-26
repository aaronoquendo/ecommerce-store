import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';

let store;

if(process.env.PORT){
    store = createStore(
        reducers,
        {
            auth: { authenticated: localStorage.getItem('token') }
        },
        applyMiddleware(reduxThunk),
    );

}else {
    store = createStore(
        reducers,
        {
            auth: { authenticated: localStorage.getItem('token') }
        },
        composeWithDevTools(applyMiddleware(reduxThunk)),
    );
}



ReactDOM.render((
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>

   ), document.getElementById('root'));


console.log('ENVIOR',process.env.NODE_ENV);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
