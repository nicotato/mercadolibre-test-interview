import express from "express";
import logger from "morgan";
import compression from "compression";

import helmet from "helmet";
import routes from "./api/routes";
import routesRender from "./render";
import path from "path";
import cors from "cors";

const envDevelopment =
  process.env.NODE_ENV === "development";

const app = express();
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(cors());
// compress responses
if (envDevelopment) {
  app.use(logger("dev"));
} else {
  app.use(compression());
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set routes
const publicFolder = path.resolve(__dirname);
app.use("/api", routes);

app.use(routesRender);
app.use(express.static(publicFolder));
app.all("*", (request, response) => response.redirect("/"));
export default app;
