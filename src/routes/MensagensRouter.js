const { Router } = require('express')
const { listarMensagens, listarMensagemsDoUsuario, enviarMensagemParaUsuario, conversar, deletarMensagens } = require('../controller/MensagensController')

const router = Router()

router.get("/mensagens", listarMensagens)
router.get("/mensagens/:id", listarMensagemsDoUsuario)
router.get("/mensagens/:id_remetente/:id_destinatario", conversar)
router.post("/mensagens", enviarMensagemParaUsuario)
// router.put("/pet/:id", editarPet)
router.delete("/mensagens/:id", deletarMensagens)

module.exports = router