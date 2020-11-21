//Aqui vamos a crear los modelos de datos: es decir como vamos a guadar datos dentro de MongoDB

//Mongoose nos permite modelar como se guardan esos datos (como es el esquema)
const { Schema, model } = require("mongoose");

//Definimos el Schema de datos para las notas
const noteSchema = new Schema(
  {
    title: String,
    content: {
      type: String,
      required: true,
    },
    author: String,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

//Una vez creado el Schema, lo guardamos como modelo, lo nombramos "Note" y lo exportamos. Aqui se creara una collection dentro de MongoDB llamada notes
module.exports = model("Note", noteSchema);
