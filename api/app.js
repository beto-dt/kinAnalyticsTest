const express = require("express");
const bodyParser = require("body-parser");
const app = express();

/* Llamar rutas  */
const klingons_routes = require("./routes/klingons");

/* Middleware  */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* CORS */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");

  next();
});

/* Cargar Ruta  */
app.use("/api", klingons_routes);

module.exports = app;
