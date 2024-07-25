const petServices = require("../services/PetServices")

const todosOsPets = async (req, res) => {
    try {
        const pets = await petServices.listarPets()
        res.status(200).json(pets)
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const buscarPorUmPet = async (req, res) => {
    const { id } = req.params
    try {
        const pet = await petServices.petPorId(id)
        res.status(200).json(pet)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const petDoUsuario = async (req, res) => {
    const { id } = req.params
    try {
        const pets = await petServices.buscarPetCadastradoPeloUsuario(id)
        res.status(200).json(pets)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const criarPet = async (req, res) => {
    const dados = req.body
    try {
        await petServices.criar(dados)
        res.status(201).json({ message: "Pet criado com sucesso!" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const editarPet = async (req, res) => {
    const { id } = req.params
    const dados = req.body
    try {
        await petServices.editar(id, dados)
        res.status(200).json({ message: "Pet atualizado com sucesso!" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const deletarPetPorId = async (req, res) => {
    const { id } = req.params
    try {
        await petServices.deletar(id)
        res.status(200).json({ message: "Pet deletado com sucesso!" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { todosOsPets, buscarPorUmPet, criarPet, deletarPetPorId, editarPet, petDoUsuario }