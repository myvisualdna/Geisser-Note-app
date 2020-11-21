//Aqui vamos a definir las rutas y que sucedera cuando accedemos a esa ruta especifica. Llamamos el router que vamos a usar en el backend

//1. LLamamos a router que vamos a usar en el backend
const { Router } = require("express");
const router = Router();

//2. Importamos los controller que habiamos definido
const {
  getNotes,
  createNotes,
  updateNotes,
  deleteNotes,
  getIndividualNote,
} = require("../controllers/notes.controller");

//3. Definimos que metodos puede recibir la URL raiz (Atencion: aqui la raiz no es la pagina principal sino "api/notes/". Entonces estos seran admitidos cuando los enviamos a http://localhost:3030/api/notes/)
router.route("/").get(getNotes).post(createNotes);

//4. Definimos que metodos puede recibir la URL raiz/:id (Atencion: aqui la raiz no es la pagina principal sino "api/notes/". Entonces estos seran admitidos cuando los enviamos a "http://localhost:3030/api/notes/:id")
router
  .route("/:id")
  .get(getIndividualNote)
  .put(updateNotes)
  .delete(deleteNotes);

//5. Por ultimo exportamos el router
module.exports = router;
