const { Router } = require('express')
const { todosOsPets, buscarPorUmPet, criarPet, deletarPetPorId, editarPet, petDoUsuario } = require('../controller/PetController')


const router = Router()

router.get("/pets", todosOsPets)
router.get("/pet/:id", buscarPorUmPet)
router.get("/pet-usuario/:id", petDoUsuario)
router.post("/pet", criarPet)
router.put("/pet/:id", editarPet)
router.delete("/pet/:id", deletarPetPorId)

module.exports = router