const authenticateJWT = require("../authenticateJWT");
const siteRouter = require("./site");
const taskRouter = require("./task");
const authRouter = require("./auth");

function route(app) {
  app.use("/task", authenticateJWT, taskRouter);
  app.use("/auth", authRouter);
  app.use("/", siteRouter);
}

module.exports = route;
