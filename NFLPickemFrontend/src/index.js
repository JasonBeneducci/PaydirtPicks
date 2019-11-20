import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducer from './reducers/Reducer'

const store = createStore(Reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />,
    </Provider>, 
document.getElementById('root'));


