module.exports = app => {
  const { checkToken } = require("../middleware");
  const controller = require("../controllers/shows.controller.js");
  app.post("/api/shows", controller.create);
  app.get("/api/shows", controller.findAll);
  app.get("/api/shows/:showId", controller.findOne);
  app.put("/api/shows/:showId", checkToken, controller.update);
  app.delete("/api/shows/:showId", checkToken, controller.delete);
};
