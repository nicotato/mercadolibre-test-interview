import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./state/store";

const Init = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
const renderMethod = module.hot
  ? ReactDOM.render
  : ReactDOM.hydrate;
// if (!document.getElementById("root").childNodes.length) {
renderMethod(<Init />, document.getElementById("root"));
// } else {
//   renderMethod(
//     <Init />,
//     document.getElementById("root")
//   );
// }
serviceWorker.unregister();
