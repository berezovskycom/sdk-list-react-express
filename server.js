const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");

// helper functions
const getFile = (path, encoding = "utf-8") => fs.readFileSync(path, encoding);


// global-scope constants
const SDKs = getFile("./public/sdks.json");
const app = express();
const port = 8080;


// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('build'));


// routes
app.get("/", (req, res) => {
  res.sendFile("build/index.html", { root: __dirname });
});

app.get("/sdks", (req, res) => {
  res.end(SDKs);
});

app.post("/filterSdks", (req, res) => {
  const { type, data } = req.body.filter;
  const notFound = JSON.stringify([
    { title: "Not found", tags: ["The requested result is not found"] },
  ]);

  let filtered = [];

  if (type === "radio") {
    if (data === "all") {
      res.send(SDKs);
      return;
    }

    /*
      Filter by tag name
    */
    filtered = JSON.parse(SDKs).filter(
      (item) => item.tags && item.tags.includes(data)
    );
  }

  if (type === "inputText") {
    /*
      Filter by text from a search field (title)
    */
    filtered = JSON.parse(SDKs).filter(
      (item) => item.title && item.title.includes(data)
    );
  }

  if (filtered.length === 0 || (type === "inputText" && data === "all")) {
    res.end(notFound);
  }

  res.end(JSON.stringify(filtered));
});

app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});


// server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});
