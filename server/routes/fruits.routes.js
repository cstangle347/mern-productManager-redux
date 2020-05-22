const fruitController = require("../controllers/fruits.controller");

module.exports = app => {
    app.post("/api/fruits", fruitController.create);
    app.get("/api/fruits", fruitController.getAll);
    app.get("/api/fruits/:id", fruitController.getOne);
    app.put("/api/fruits/:id", fruitController.update);
    app.delete("/api/fruits/:id", fruitController.delete);
}