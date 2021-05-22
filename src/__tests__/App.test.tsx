import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "../store/reducers/session";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "../App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const rootReducer = combineReducers({
    session: sessionReducer,
  });

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  act(() => {
    ReactDOM.render(
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>,
      div
    );
  });
});
