const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const reletedModels = require("./models/initModels");


reletedModels();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = 8000;

db.authenticate()
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((error) => console.log(error));

// Crea las tablas si no existen
// Si existe y hay diferencias modifica la base de datos
// Si todo esta igual hace caso omiso

// alter --> false
// force --> false

// * alter: true --> modifico las tablas
// ! force: true --> elimino toda la estructura de la db
// ! y la crea nuevamente

db.sync( {force: true}) // alterar los atributos
  .then(() => console.log("Base de datos sync"))
  .catch((error) => console.log(error));


app.get("/", (req, res) => {
  res.send("welcome to my API");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});