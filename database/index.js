// SERVER
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// CORS
const cors = require("cors");
const corsMiddleware = cors();

// BODY PARSER
const bodyParser = require("body-parser");
const parserMiddleware = bodyParser.json();

app.use(corsMiddleware);
app.use(parserMiddleware);

// ROUTER
const articlesRouter = require("../router/router");

app.use(articlesRouter);

// INIT
app.listen(port, () => console.log(`Listening on port ${port}!`));
