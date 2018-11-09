const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
  res.send('hello');
});

Router.post('/', (req, res) => {
  res.send('post sucessful');
});

Router.get('/add', (req, res) => {
  res.send('add working');
});

module.exports = Router;