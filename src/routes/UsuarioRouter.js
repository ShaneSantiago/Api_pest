const { Router } = require('express')
const { listarUsuario, listarPorId, criarUsuario, deletarUsuario, editarUsuario, loginUsuario } = require('../controller/UsuarioController')


const router = Router()

router.get("/usuarios", listarUsuario)
router.get("/usuario/:id", listarPorId)
router.post("/usuario", criarUsuario)
router.put("/usuario/:id", editarUsuario)
router.delete("/usuario/:id", deletarUsuario)

router.post("/login/usuario", loginUsuario)

module.exports = router