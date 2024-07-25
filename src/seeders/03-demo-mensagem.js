'use strict';

/** @type {import('sequelize').QueryInterface} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mensagens', [
      {
        conteudo: 'Olá, como você está?',
        usuario_id_remetente: 1,
        usuario_id_destinatario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mensagens', null, {});
  }
};
