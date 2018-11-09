const express = require('express');
const Router = express.Router();
const { Page } = require('../models');
const { addPage } = require('../views');
const wikiHTML = require('../views/wikipage')


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
    res.redirect(`/wiki/${page.slug}`);
  } catch(error) { next(error) }
});

Router.get('/add', (req, res) => {
  res.send(addPage());
});

Router.get('/:slug', async (req, res, next) => {
  try{
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    })
    res.send(wikiHTML(page));
  } catch (error) {next(error)}
});

module.exports = Router;
