'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.hasMany(models.Pets, { foreignKey: 'usuario_id', as: 'pets' });

      // Um usuário pode enviar muitas mensagens
      Usuario.hasMany(models.Mensagens, { foreignKey: 'usuario_id_remetente', as: 'mensagensEnviadas' });

      // Um usuário pode receber muitas mensagens
      Usuario.hasMany(models.Mensagens, { foreignKey: 'usuario_id_destinatario', as: 'mensagensRecebidas' });
    }
  }
  Usuario.init({
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
    salt: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    cep: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cpf: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios'
  });
  return Usuario;
};
