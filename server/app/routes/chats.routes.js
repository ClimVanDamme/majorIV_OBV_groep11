module.exports = app => {
  const { checkToken } = require("../middleware");
  const controller = require("../controllers/chats.controller.js");
  app.post("/api/chats", controller.create);
  app.get("/api/chats", controller.findAll);
  app.get("/api/chats/:chatId", controller.findOne);
  app.put("/api/chats/:chatId", controller.update);
  app.delete("/api/chats/:chatId", controller.delete);
};
