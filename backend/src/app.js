///////1. Aqui definimos el servidor
const express = require("express");
const cors = require("cors");
const app = express();

/////2. Definimos las SETTINGS
app.set("port", process.env.PORT || 4000);

//3. Definimos los MIDDLEWARES
//Cors hace que dos servidores intercambien datos entre ellos
app.use(cors());
app.use(express.json());

//4. Definimos las ROUTES
//Creamos las rutas del servidor (las traemos de los archivos routes)
app.use("/api/users", require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));

module.exports = app;
