import React from "react";
import { Provider } from "react-redux";
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ReactDOM from "react-dom";
import { App } from "./containers/app";
import { reducers } from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const globalState = combineReducers(reducers);
const store = createStore(
    globalState,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
