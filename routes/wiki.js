const express = require('express');
const Router = express.Router();
const { Page } = require('../models');
const { addPage } = require('../views');


Router.get('/', (req, res) => {
  res.redirect('../');
});

Router.post('/', async (req, res, next) => {
  // Add form data to database
  const page = new Page({
    title: req.body.title,
    content: req.body.content
  });
  try {
    await page.save();
    res.redirect('/');
  } catch(error) { next(error) }
  res.send(req.body);
});

Router.get('/add', (req, res) => {
  res.send(addPage());
});

module.exports = Router;
