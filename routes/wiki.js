const express = require('express');
const Router = express.Router();
const addPage = require('../views/addPage.js');

Router.get('/', (req, res) => {
  res.redirect('../');
});

Router.post('/', (req, res) => {
  res.send('post sucessful');
});

Router.get('/add', (req, res) => {
  res.send(addPage());
});

module.exports = Router;
