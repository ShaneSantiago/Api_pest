const dataSource = require("../models")

const listarPets = () => {
    return dataSource.Pets.findAll()
}

const petPorId = async (id) => {
    const pet_id = await dataSource.Pets.findByPk(id)
    if(!pet_id) {
        throw new Error("Pet não encontrado ou não existe")
    }
    return dataSource.Pets.findByPk(id)
}

const buscarPetCadastradoPeloUsuario = (id) => {
    return dataSource.Pets.findAll({ where: { usuario_id: id } })
}

const criar = (dados) => {
    const verificarParametros = ["nome_do_pet", "raca", "idade", "descricao", "foto", "disponivel", "usuario_id"];

    verificarParametros.forEach(parametro => {
        if (!dados[parametro]) {
            throw new Error(`O campo ${parametro} é obrigatório`);
        }
    });

    if (!Array.isArray(dados.foto) || dados.foto.length === 0) {
        throw new Error(`O campo foto é obrigatório e deve ser um array contendo pelo menos uma URL de foto`);
    }

    return dataSource.Pets.create(dados);
}

const editar = (id, dados) => {
    return dataSource.Pets.update(dados, { where: { id } })
}

const deletar = (id) => {
    return dataSource.Pets.destroy({ where: { id } })
}

module.exports = { listarPets, petPorId, criar, deletar, editar, buscarPetCadastradoPeloUsuario }