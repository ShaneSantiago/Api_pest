const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:8081', // ou '*' para todas as origens
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json()); // Certifique-se de que o corpo das requisições seja interpretado como JSON

routes(app);

module.exports = app;
