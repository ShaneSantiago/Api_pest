'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mensagens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mensagens.belongsTo(models.Usuario, { foreignKey: 'usuario_id_remetente', as: 'remetente' });

      // Uma mensagem pertence a um destinatário (usuário)
      Mensagens.belongsTo(models.Usuario, { foreignKey: 'usuario_id_destinatario', as: 'destinatario' });
    }
  }
  Mensagens.init({
    conteudo: DataTypes.TEXT,
    usuario_id_remetente: DataTypes.INTEGER,
    usuario_id_destinatario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mensagens',
    tableName: 'mensagens'
  });
  return Mensagens;
};