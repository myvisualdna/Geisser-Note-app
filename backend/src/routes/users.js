//Aqui vamos a definir las rutas y que sucedera cuando accedemos a esa ruta especifica

const { Router } = require("express");
const router = Router();

//Traemos desde controllers, los metodos que se van a disparar al visitar cada ruta
const {
  getUsers,
  createUsers,
  deleteUsers,
} = require("../controllers/users.controller");

//Definimos que sucede cuando visitamos /api/users
router.route("/")
.get(getUsers)
.post(createUsers);

//Definimos que sucede cuando visitamos api/users/"algun id"
router.route("/:id")
.delete(deleteUsers);

module.exports = router;
