const http = require("http");
const logger = require("./middlewares/logger");
const routes = require("./routes/routes");

const server = http.createServer((req, res) => {
  logger(req, res, () => routes(req, res));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
