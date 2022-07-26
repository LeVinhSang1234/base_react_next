const express = require("express");
const path = require("path");
const http = require("http");

const app = express();

// Point static path to dist
app.use("/", express.static(path.join(__dirname, "..", "dist")));
app.use("/dist", express.static(path.join(__dirname, "..", "dist")));

const router = express.Router();

router.get("*", (req, res) => {
  const route = path.join(__dirname, "..", "dist", "index.html");
  res.sendFile(route);
});

app.use("/", router);

/** Get port from environment and store in Express. */
const port = process.env.PORT || "8080";
app.set("port", port);

/** Create HTTP server. */
const server = http.createServer(app);
/** Listen on provided port, on all network interfaces. */
server.listen(port, () => console.log(`Server Running on port ${port}`));
