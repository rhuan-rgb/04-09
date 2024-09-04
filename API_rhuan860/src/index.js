const express = require("express");

class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    const api_routes = require("./routes/api_routes");
    this.express.use("/project-senai/api/v1", api_routes);

    this.express.get("/Health/", (req, res) => {
      res.send({ status: "OK" });
    });
  }
}

module.exports = new AppController().express;
