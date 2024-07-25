const dataSource = require('../models/index')
const { Op } = require('sequelize');

const mostrarMensagens = () => {
    return dataSource.Mensagens.findAll()
}

const mostrarMensagensDoUsuario = (id) => {
    return dataSource.Mensagens.findAll({ where: { usuario_id_destinatario: id } })
}

const mostrarMensagensEntreUsuarios = async (id_remetente, id_destinatario) => {
    const mensagens = await dataSource.Mensagens.findAll({
        where: {
            [Op.or]: [
                { usuario_id_remetente: id_remetente, usuario_id_destinatario: id_destinatario },
                { usuario_id_remetente: id_destinatario, usuario_id_destinatario: id_remetente }
            ]
        },
        order: [['createdAt', 'ASC']]
    });
    return mensagens;
}

const criar = async (dados) => {
    try {
        // Verifica se o conteúdo da mensagem e os IDs dos usuários estão presentes
        if (!dados.conteudo || !dados.usuario_id_remetente || !dados.usuario_id_destinatario) {
            throw new Error('O conteúdo da mensagem, remetente e destinatário são obrigatórios');
        }
    
        // Cria a mensagem no banco de dados usando o modelo importado
        const novaMensagem = await dataSource.Mensagens.create({
            conteudo: dados.conteudo,
            usuario_id_remetente: dados.usuario_id_remetente,
            usuario_id_destinatario: dados.usuario_id_destinatario
        });
    
        return novaMensagem;
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        throw error;
    }
}

const deletar = (id) => {
    return dataSource.Mensagens.destroy({ where: { id } })
}

module.exports = { mostrarMensagens, mostrarMensagensDoUsuario, criar, mostrarMensagensEntreUsuarios, deletar }