'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pets.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
    }
  }
  Pets.init({
    nome_do_pet: DataTypes.STRING,
    raca: DataTypes.STRING,
    idade: DataTypes.NUMBER,
    descricao: DataTypes.STRING,
    foto: DataTypes.JSON,
    disponivel: DataTypes.BOOLEAN,
    usuario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pets',
    tableName: 'pets'
  });
  return Pets;
};