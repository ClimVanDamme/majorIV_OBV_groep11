module.exports = app => {
  const { checkToken } = require("../middleware");
  const controller = require("../controllers/connections.controller.js");
  app.post("/api/connections", controller.create);
  app.get("/api/connections", checkToken, controller.findAll);
  app.get("/api/connections/:connectionId", controller.findOne);
  app.put("/api/connections/:connectionId", checkToken, controller.update);
  app.delete("/api/connections/:connectionId", checkToken, controller.delete);
};
