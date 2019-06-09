module.exports = app => {
  const { checkToken } = require("../middleware");
  const controller = require("../controllers/stories.controller.js");
  app.post("/api/stories", checkToken, controller.create);
  app.get("/api/stories", checkToken, controller.findAll);
  app.get("/api/stories/:storyId", checkToken, controller.findOne);
  app.put("/api/stories/:storyId", checkToken, controller.update);
  app.delete("/api/stories/:storyId", checkToken, controller.delete);
};
