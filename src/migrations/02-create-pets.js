'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_do_pet: {
        type: Sequelize.STRING
      },
      raca: {
        type: Sequelize.STRING
      },
      idade: {
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.JSON,
      },
      disponivel: {
        type: Sequelize.BOOLEAN
      },
      usuario_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pets');
  }
};