'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('usuarios', [
      {
          nome: 'John Doe',
          email: 'teste@gmail.com',
          senha: '123456',
          telefone: '123456789',
          cpf: '12345678910',
          cep: '12345678',
          bairro: 'teste',
          estado: 'teste',
          cidade: 'teste',
          createdAt: new Date(),
          updatedAt: new Date()
      }
  ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
