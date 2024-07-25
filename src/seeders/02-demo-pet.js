'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('pets', [{
      nome_do_pet: 'Happy',
      raca: 'Akita',
      idade: 5,
      descricao: 'Akita muito legal',
      foto: JSON.stringify([
        'https://i.pinimg.com/736x/1e/5e/0d/1e5e0d6b1d4f7a0e8b7c7f8e6b2f8a8b7.jpg',
        'https://i.pinimg.com/736x/1e/5e/0d/1e5e0d6b1d4f7a0e8b7c7f8e6b2f8a8b7.jpg'
      ]),
      disponivel: true,
      usuario_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('pets', null, {});

  }
};
