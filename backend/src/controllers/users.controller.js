const userCtrl = {};

const user = require("../models/user");

userCtrl.getUsers = async (req, res) => {
  //Buscamos todos los usuarios y los guardamos dentro de la const users
  const users = await user.find();
  //Devolvemos como resultado lo que guardamos dentro de 'users'
  res.send(users);
};

userCtrl.createUsers = async (req, res) => {
  //De lo que envia el usuario (req.body), obtenemos el username
  const { username } = req.body;
  //Con ese username introducido creamos un usuario nuevo
  const newUser = new user({ username });
  //Guardamos ese nuevo usuario
  await newUser.save();
  res.send("User created");
};

userCtrl.deleteUsers = async (req, res) => {
  await user.findByIdAndDelete(req.params.id);
  res.send("User deleted");
};

module.exports = userCtrl;

