//1. Aqui vamos al objeto almacenador del controller
const notesCtrl = {};

//2. Importamos el model de datos para que lo usen los controladores
const Note = require("../models/note");

///Entonces, definimos que hace cada controlador (que acciones dispara), cuando accedemos cada ruta

//3. Este controlador obtendra las notas almacenadas en nuestra DB (ver metodo find)
notesCtrl.getNotes = async (req, res) => {
  //Antes de dar una respuesta, vamos a consultar nuestras notas dentro de MongoDB
  const notes = await Note.find(); // Devolvera un arreglo con todas mis notas
  res.json(notes); //Le enviamos al frontend un arreglo con todas las notas
};

//4. Este controlador creara notas en nuestra DB
notesCtrl.createNotes = async (req, res) => {
  //Antes de crear una nota, vamos a recibir la info que nos esta mandando el frontend (req.body). Esperamos que el usuario envie un title, content, date, author.
  const { title, content, date, author } = req.body;
  //Entonces tomamos el model que habiamos creado, creamos un objeto nuevo, lo llenamos con la data que envio el frontend y lo guardamos en la DB
  const newNote = new Note({
    title: title,
    content: content,
    date: date,
    author: author,
  });
  console.log(newNote);
  await newNote.save();
  res.json({ message: "Note Saved" });
};

//3.Este controlador es el encargado de buscar una nota especifica en nuestra DB (a partir de la id)
notesCtrl.getIndividualNote = async (req, res) => {
  //El frontend nos envia una id (re.params.id) y la buscamos en nuestra DB
  const note = await Note.findById(req.params.id);
  console.log(note);
  res.send(note); //Este elemento le voy a devolver al cliente
};

//4. Este controlador sera el encargado de eliminar una nota
notesCtrl.deleteNotes = async (req, res) => {
  //Recibimos el id de la nota que queremos eliminar, y ya podemos buscarla y eliminarla de nuestra DB
  const note = await Note.findByIdAndDelete(req.params.id);
  console.log(note);
  res.send({ message: "Note Deleted" });
};

//5.Este controlador se encargara de actualizar una nota en nuestra DB
notesCtrl.updateNotes = async (req, res) => {
  //Recibimos data desde el Frontend (req.body) y los guardaremos dentro de objetos especificos
  const { title, content, date, author } = req.body;
  //Le ordenamos buscar por id, y una vez encontrada la nota en cuestion actualizar los objetos antiguos de nuestra DB con los nuevos que envio el Frontend
  await Note.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: title,
      content: content,
      author: author,
    }
  ); //Usamos esa info para actualizar la nota guardada en la DB
  res.send({ message: "Note Updated" }); //Devolvemos un mensaje de confirmacion
};

//Por ultimo, exportamos el controlador
module.exports = notesCtrl;
