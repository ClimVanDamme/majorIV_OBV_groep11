module.exports = app => {
  const { checkToken } = require("../middleware");
  const controller = require("../controllers/messages.controller.js");
  app.post("/api/messages", controller.create);
  app.get("/api/messages", controller.findAll);
  app.get("/api/messages/:messageId", controller.findOne);
  app.put("/api/messages/:messageId", controller.update);
  app.delete("/api/messages/:messageId", controller.delete);
};
