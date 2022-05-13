const express = require('express');
const klingonsController = require('../controllers/klingons');
const api = express.Router();

api.post('/klingons', klingonsController.saveklingons);

module.exports = api;