const dataSource = require("../models")
const { criarHashComSalt, Usuario  } = require("../services/hash/hashComSalt");

const todosUsuarios = () => {
    return dataSource.Usuario.findAll()
}

const usuarioPorId = async (id) => {
    const usuario_id = await dataSource.Usuario.findByPk(id);
    
    if (!usuario_id) {
        throw new Error("Usuário não encontrado");
    }
    return usuario_id;
}

const criar = (dados) => {
    const requiredFields = ['nome', 'senha', 'email', 'telefone', 'cep', 'cidade', 'estado', 'bairro', 'cpf'];
    
    requiredFields.forEach(field => {
        if (!dados[field]) {
            throw new Error(`O campo ${field} é obrigatório`);
        }
    });

    const hash = criarHashComSalt(dados.senha);

    return dataSource.Usuario.create({
        nome: dados.nome,
        senha: hash,
        email: dados.email,
        telefone: dados.telefone,
        cep: dados.cep,
        cidade: dados.cidade,
        estado: dados.estado,
        bairro: dados.bairro,
        cpf: dados.cpf
    });
}

const editar = async (id, dados) => {
    const usuario_id = await dataSource.Usuario.findByPk(id);

    if(!usuario_id) {
        throw new Error("Usuário não encontrado ou não existe");
    }

    return dataSource.Usuario.update(dados, { where: { id } })
}

const deletar = async (id) => {
    const usuario_id = await dataSource.Usuario.findByPk(id)

    if(!usuario_id) {
        throw new Error("Usuário não encontrado ou não existe");
    }

    return dataSource.Usuario.destroy({ where: { id } })
}

const autenticar = async (email, senha) => {
    if (!email || !senha) {
        throw new Error("Email e senha são obrigatórios para autenticação");
    }
    const usuarioRecord = await dataSource.Usuario.findOne({ where: { email } });

    if (!usuarioRecord) {
        throw new Error("Usuário não encontrado");
    }

    const usuario = new Usuario(email, senha);
    const [salt, storedHash] = usuarioRecord.senha.split(':');
    usuario.salt = salt;
    usuario.hash = storedHash;

    return usuario.autentica(email, senha);
}

module.exports = { todosUsuarios, usuarioPorId, criar, deletar, editar, autenticar }