const mensagemServices = require("../services/MensagemServices")

const listarMensagens = async (req, res) => {
    try {
        const mensagens = await mensagemServices.mostrarMensagens()
        res.status(200).json(mensagens)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
const listarMensagemsDoUsuario = async (req, res) => {
    const { id } = req.params
    try {
        const mensagens = await mensagemServices.mostrarMensagensDoUsuario(id)
        res.status(200).json(mensagens)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const conversar = async (req, res) => {
    const { id_remetente, id_destinatario } = req.params; // Pegando os parâmetros corretamente
    try {
        const conversa = await mensagemServices.mostrarMensagensEntreUsuarios(id_remetente, id_destinatario);
        res.status(200).json(conversa);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const enviarMensagemParaUsuario = async (req, res) => {
    const { id } = req.params
    const dados = req.body
    try {
        const mensagem = await mensagemServices.criar(dados)
        res.status(201).json({ message: "Mensagem enviada com sucesso!", mensagem })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const deletarMensagens = async (req, res) => {
    const { id } = req.params
    try {
        await mensagemServices.deletar(id)
        res.status(200).json({ message: "Mensagem deletada com sucesso!" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { listarMensagens, listarMensagemsDoUsuario, enviarMensagemParaUsuario, conversar, deletarMensagens }