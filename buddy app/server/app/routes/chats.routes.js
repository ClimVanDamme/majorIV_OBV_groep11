module.exports = app => {
  const { checkToken } = require("../middleware");
  const controller = require("../controllers/chats.controller.js");
  app.post("/api/chats", checkToken, controller.create);
  app.get("/api/chats", checkToken, controller.findAll);
  app.get("/api/chats/:chatId", checkToken, controller.findOne);
  app.put("/api/chats/:chatId", checkToken, controller.update);
  app.delete("/api/chats/:chatId", checkToken, controller.delete);
};
