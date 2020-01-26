import App from './js/components/app/app'
import React from 'react'
import {render, hydrate} from 'react-dom'
import {renderToString} from 'react-dom/server'
import Header from './js/components/header/header'
import { StaticRouter } from 'react-router-dom'


//import {Provider} from 'react-redux'
//import thunk from 'redux-thunk'
//import {createStore, applyMiddleware} from 'redux'
//import promise from 'redux-promise'
//import reduxReset from 'redux-reset'

if (typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function') {
    window.renderClient = (data) => {
        //let store = applyMiddleware([promise, thunk])(createStore)(null, state, reduxReset());
        hydrate (
            <BrowserRouter>
                <Header data={data}/>
            </BrowserRouter>,
            document.getElementById ('root')
        );
    }
} else {
    global.renderServer = (path, data) => {
        data = JSON.parse(data);
        const context = {};
        return renderToString(
          <StaticRouter location={path} context={context}>
            <Header data={data} />
          </StaticRouter>
        );

        // //let store = applyMiddleware([promise, thunk])(createStore)(null, state, reduxReset());
        // console.log(persons);
        // //store.subscribe(() => console.log(store.getState()));
        // return renderToString (
        //     //<Provider store={ store }>
        //         <App persons={JSON.parse(persons)}/>
        //     //</Provider>
        // );
    }    
}