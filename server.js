const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const compression = require("compression"); 
const express = require("express"); 

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const expressApp = express();
  expressApp.use(compression());
  expressApp.all("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });
  const server = createServer(expressApp);
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("🚀 Server running on http://localhost:3000");
  });
});