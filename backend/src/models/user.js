//Aqui vamos a crear los modelos de datos: es decir como vamos a guadar datos dentro de MongoDB

//Mongoose nos permite modelar como se guardan esos datos (se define como esquema)
const { Schema, model } = require("mongoose");

//Definimos el Schema de datos para los users
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

//Una vez creado el Schema, lo guardamos como modelo, lo nombramos "User" y lo exportamos
module.exports = model("User", userSchema);
