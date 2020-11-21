//1.Moongose nos permite conectarnos a MongoDB
const mongoose = require("mongoose");

//2. Le decimos que cree una base de datos llamada 'mernnew'
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost/databasetest";

  //3. Le decimos a mongoose que se conecte a la base de datos, si todo sale bien vamos a leer en la consola "MongoDB is connected"
mongoose.connect(
  URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true },
  (err) => {
    if (err) console.error(err);
    else console.log("Connected to the mongodb");
  }
);

//4. Definimos esa conexion en una variable para que se ejecute
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is connected");
});
