const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
// controllers
const {
  usuarioGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
} = require("../controllers/usuarios.controller");
// Middlewares
const { validarCampos } = require("../middlewares/validar-campos");
// Helpers
const { rolValido, existeEmail, existeUsuarioPorId } = require("../helpers/db.validators");

router.get("/", usuarioGet);

router.post(
  "/",
  [
    check("correo", "El correo no es válido").isEmail().custom(existeEmail),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check(
      "password",
      "El password es obligatorio y debe tener más de 6 carácteres"
    ).isLength({ min: 6 }),
    //check('rol', 'No es un rol Válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check("rol").custom(rolValido),
    validarCampos,
  ],
  usuariosPost
);

router.put("/:id", [
check('id', 'No es un ID Válido').isMongoId().custom(existeUsuarioPorId),
check('rol').custom(rolValido),
validarCampos,
], usuariosPut);


router.delete("/:id",[
  check('id', ' No es un ID Válido').isMongoId().custom(existeUsuarioPorId),
  validarCampos,
], usuariosDelete);

module.exports = router;
