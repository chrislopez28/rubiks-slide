"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
require("./index.css");
var App_1 = require("./App");
var reportWebVitals_1 = require("./reportWebVitals");
var session_1 = require("./store/reducers/session");
var composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || redux_1.compose;
var rootReducer = redux_1.combineReducers({
    session: session_1.default
});
var store = redux_1.createStore(rootReducer, composeEnhancers(redux_1.applyMiddleware(redux_thunk_1.default)));
react_dom_1.default.render(<react_redux_1.Provider store={store}>
    <react_1.default.StrictMode>
      <App_1.default />
    </react_1.default.StrictMode>
  </react_redux_1.Provider>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1.default();
