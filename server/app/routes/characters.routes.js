module.exports = app => {
  const { checkToken } = require("../middleware");
  const controller = require("../controllers/characters.controller.js");
  app.post("/api/characters", controller.create);
  app.get("/api/characters", controller.findAll);
  app.get("/api/characters/:characterId", controller.findOne);
  app.put("/api/characters/:characterId", controller.update);
  app.delete("/api/characters/:characterId", controller.delete);
};
