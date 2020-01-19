import App from './js/components/app/app'
import React from 'react'
import {render, hydrate} from 'react-dom'
import {renderToString} from 'react-dom/server'


//import {Provider} from 'react-redux'
//import thunk from 'redux-thunk'
//import {createStore, applyMiddleware} from 'redux'
//import promise from 'redux-promise'
//import reduxReset from 'redux-reset'

if (typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function') {
    window.renderClient = (persons) => {
        //let store = applyMiddleware([promise, thunk])(createStore)(null, state, reduxReset());
        hydrate (
            //<Provider store={ store }>
                <App persons={persons}/>,
            //</Provider>,
            document.getElementById ('root')
        );
    }
} else {
    global.renderServer = (persons) => {

        //let store = applyMiddleware([promise, thunk])(createStore)(null, state, reduxReset());
        console.log(persons);
        //store.subscribe(() => console.log(store.getState()));
        return renderToString (
            //<Provider store={ store }>
                <App persons={JSON.parse(persons)}/>
            //</Provider>
        );
    }    
}