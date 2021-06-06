const { Schema, model } = require("mongoose");

const UsuarioSchema = new Schema({
  nombre: { type: String, required: [true, "El Nombre es Obligatorio"] },
  correo: {
    type: String,
    required: [true, "El Correo es Obligatorio"],
    unique: true,
  },
  password: { type: String, required: [true, "La Contraseña es Obligatoria"] },
  img: { type: String },
  rol: { type: String, required: true, emun: ["ADMIN_ROLE", "USER_ROLE"] },
  estado: { type: Boolean, default: true },
  google: { type: Boolean, default: false },
});

UsuarioSchema.methods.toJSON = function () {
  const { __v, password, ...usuario } = this.toObject();
  return usuario;
};

module.exports = model("Usuario", UsuarioSchema);
