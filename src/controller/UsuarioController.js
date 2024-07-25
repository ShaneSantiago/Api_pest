const usuarioServices = require("../services/UsuarioServices");

const listarUsuario = async (req, res) => {
    try {
        const usuarios = await usuarioServices.todosUsuarios()
        res.status(200).json(usuarios)
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const listarPorId = async (req, res) => {
    const { id } = req.params
    try {
        const usuarioPorId = await usuarioServices.usuarioPorId(id)
        res.status(200).json(usuarioPorId)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const criarUsuario = async (req, res) => {
    const dados = req.body
    try {
        await usuarioServices.criar(dados)
        res.status(201).json({ message: "Usuário criado com sucesso!" })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const editarUsuario = async (req, res) => {
    const { id } = req.params
    const dados = req.body
    try {
        const atualizar = await usuarioServices.editar(id, dados)
        res.status(200).json({ message: "Usuário atualizado com sucesso!", atualizar })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
const deletarUsuario = async (req, res) => {
    const { id } = req.params
    try {
        await usuarioServices.deletar(id)
        res.status(200).json({ message: "Usuário deletado com sucesso!" })
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const loginUsuario = async (req, res) => {
    const { email, senha } = req.body
    try {
        const token = await usuarioServices.autenticar(email, senha)
        res.status(200).json({ token })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { listarUsuario, listarPorId, criarUsuario, deletarUsuario, editarUsuario, loginUsuario }