import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import myApp from './Redux/Reducers'

import * as serviceWorker from './serviceWorker';

import Vote from './Components/Vote'
import Results from './Components/Results'
import Header from './Components/Header'
import { Container } from './Styles'

let store = createStore(myApp);

function render () {
    ReactDOM.render(
        <Container>
            <Header />
            <Vote store={store} />
            <Results store={store} />
        </Container>
        ,
        document.getElementById('root')
    );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

store.subscribe(render);
render();

