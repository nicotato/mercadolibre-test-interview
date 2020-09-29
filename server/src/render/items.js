import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import fs from "fs";
import { Provider } from "react-redux";
import counterApp from "../../../client/src/state/reducers";
import App from "../../../client/src/App";
import { createStore } from "redux";
import { items } from "../controllers";

const router = express.Router();

const htmlFile = fs.readFileSync(
  path.resolve(__dirname, `index.html`),
  "utf8"
);

// Routes
async function handleRequest(
  req,
  res,
  preloadedState = {}
) {
  console.log("que dice", req.url, req.query);

  const context = {};
  const store = createStore(counterApp, preloadedState);
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.redirect(301, context.url);
  } else {
    const site = htmlFile.replace(
      `<div id="root"></div>`,
      `<div id="root">${html.trim()}</div>
      <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(
            preloadedState
          ).replace(/</g, "\\u003c")}
        </script>`
    );

    res.status(200).send(site);
  }
}
router.get("/items", async (req, res) => {
  console.log("ESTA /items");
  if (!req.query.search) res.redirect("/");
  try {
    const preloadState = {
      items: await items.getSearch({
        search: req.query.search,
        limit: 4,
      }),
    };
    handleRequest(req, res, preloadState);
  } catch (error) {
    console.log(error);
  }
});

router.get("/items/:id", async (req, res) => {
  console.log("ESTA /:id");
  try {
    const preloadState = {
      items: await items.getItem(req.params.id),
    };
    handleRequest(req, res, preloadState);
  } catch (error) {
    console.log(error);
  }
});
router.get("/", (req, res) => {
  try {
    console.log("ESTA /");
    handleRequest(req, res);
  } catch (error) {
    console.log(error);
  }
});
export default router;
