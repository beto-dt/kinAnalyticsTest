const express = require("express");
const klingonsController = require("../controllers/klingons");
const api = express.Router();

api.post("/klingons", klingonsController.saveKlingons);
api.get("/klingons", klingonsController.getKlingons);
api.get("/klingons/:id", klingonsController.getKlingon);
api.put("/klingons/:id", klingonsController.updateKlingon);
api.delete("/klingons/:id", klingonsController.deleteKlingon);

module.exports = api;
