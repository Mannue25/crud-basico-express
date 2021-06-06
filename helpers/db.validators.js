const Role = require("../models/Role");
const Usuario = require("../models/Usuario");

exports.rolValido = async (rol = "") => {
    //Validación del Rol desde la DB
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El Rol ${rol} no está registrado en la base de datos`);
  }
};

exports.existeEmail = async (correo = "") => {
  //Validación del correo
  const emailTrue = await Usuario.findOne({
    correo,
  });
  if (emailTrue) {
    throw new Error(`Este correo ${correo} ya existe`);
  }
};

exports.existeUsuarioPorId = async (id) => {
  //Validación del correo
  const existeUsuario = await Usuario.findById(id)
  if (!existeUsuario) {
    throw new Error(`El id ${id} no existe `);
  }
};
