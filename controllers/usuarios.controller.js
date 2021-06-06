const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");



exports.usuarioGet = async (req, res) => {
  
  const {limite = 5, desde= 0} = req.query;
  
  const query = {estado: true};
  const usuarios = await Usuario.find(query)
  .skip(Number(desde))
  .limit(Number(limite));

  const total = await Usuario.countDocuments(query);

  res.json({
    total,
    usuarios
  })

};

exports.usuariosPost = async (req, res) => {
  const { nombre, correo, password, rol } = req.body;
  const usuario = await new Usuario({
    nombre,
    correo,
    password,
    rol,
  });
  //Encriptar Contraseña.
  const salt = bcryptjs.genSaltSync(10);
  usuario.password = bcryptjs.hashSync(password, salt);
  await usuario.save();

  res.json({
    usuario,
  });
};

exports.usuariosPut = async (req, res) => {
  const { id } = req.params;
  const {_id, password, google, correo, ...resto } = req.body;

  // TODO validar contra base de datos
  if (password) {
    const salt = bcryptjs.genSaltSync(10);
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto);
  res.json({
    message: "Editando...",
    usuario,
  });
};


exports.usuariosDelete = async (req, res) => {
  const {id} = req.params;
  // Eliminar Fisicamente.
  //const eliminarUsuario = await Usuario.findByIdAndDelete(id);
  const usuario = await Usuario.findByIdAndUpdate(id, {estado: false})
  res.json({
    usuario
  })
}