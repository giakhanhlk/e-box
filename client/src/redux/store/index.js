import { createBrowserHistory } from "history";
import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import getReducers from "../reducers";
import { routerMiddleware } from "connected-react-router/immutable";

export const history = createBrowserHistory();

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const initStore = (initialState) => {
  const store = createStore(
    getReducers(history),
    initialState || {},
    composeEnhancers(
      applyMiddleware(routerMiddleware(history), thunkMiddleware)
    )
  );

  if (module.hot && typeof module.hot.accept === "function") {
    module.hot.accept("../reducers", () => {
      const nextGetReducers = require("../reducers/index").default;
      store.replaceReducer(nextGetReducers());
    });
  }

  return store;
};
