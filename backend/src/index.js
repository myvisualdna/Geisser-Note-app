//1. Antes de iniciar todo, importamos las variables de entorno
require("dotenv").config();

////2. Llamamos el servidor que creamos
const app = require("./app");

//3. Importamos nuestra DB (definida en database.js) para que el servidor la inicie
require("./database");

//4. Definimos el puerto donde se inicia la app backend
async function main() {
  await app.listen(app.get("port"));
  console.log("Server on port", app.get("port"));
}

//5. Finalmente llamamos la funcion iniciadora del server Backend
main();
