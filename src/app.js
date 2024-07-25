const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:8081',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

routes(app);

module.exports = app;
