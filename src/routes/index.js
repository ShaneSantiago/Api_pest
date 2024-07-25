const express = require('express');
const usuarios = require('./UsuarioRouter');
const pets = require('./PetsRouter');
const mensagens = require('./MensagensRouter');

module.exports = (app) => {
    app.use(
        express.json(),
        usuarios,
        pets,
        mensagens
    )
}