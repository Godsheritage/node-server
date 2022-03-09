const http = require("http");
const data = require("./data.json");

server = http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(data));
  })
  .listen(3000, () => {
    console.log("Your server is running");
  });
