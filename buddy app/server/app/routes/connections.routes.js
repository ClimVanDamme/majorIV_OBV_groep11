module.exports = app => {
  const { checkToken } = require("../middleware");
  const controller = require("../controllers/connections.controller.js");
  app.post("/api/connections", checkToken, controller.create);
  app.get("/api/connections", checkToken, controller.findAll);
  app.get("/api/connections/:connectionId", checkToken, controller.findOne);
  app.get(
    "/api/connections/show/:showId",
    checkToken,
    controller.findOneByShowId
  );
  app.put("/api/connections/:connectionId", checkToken, controller.update);
  app.delete("/api/connections/:connectionId", checkToken, controller.delete);
};
