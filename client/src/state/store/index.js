import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as actionCreators from "../actions";
import reducers from "../reducers";
// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = createStore(
  reducers,
  preloadedState,
  process.env.NODE_ENV === "development"
    ? composeWithDevTools({
        actionCreators,
        trace: true,
        traceLimit: 25,
      })(applyMiddleware(reduxThunk))
    : applyMiddleware(reduxThunk)
);

export default store;
