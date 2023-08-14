import { createProxyMiddleware } from "http-proxy-middleware";
import express, { Application } from "express";
import apicache from "apicache";
import cors from "cors";

const app: Application = express();
const cache = apicache.middleware;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const proxy = createProxyMiddleware({
  target: "https://www.home24.de",
  changeOrigin: true,
  logLevel: "debug",
});

app.post("/graphql", cache("5 minutes"), proxy);
app.listen(3001);
