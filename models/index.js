const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

function generateSlug(title) {
  if(!title) {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8);
  } else {
    return title.replace(/\s+/gi, '_').replace(/\W/gi, '');
  }
}

Page.beforeValidate((pageInstance, optionsObject) => {
  pageInstance.slug = generateSlug(pageInstance.title);
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

module.exports = { Page, User, db };