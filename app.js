const morgan = require('morgan');
const express = require('express');
const layout = require('./views/layout.js')
const { db } = require('./models');
const models = require('./models');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/wiki', require('./routes/wiki'));
app.use('/user', require('./routes/user'));

db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.get('/', (req, res) => {
  res.send(layout(''));
});

const PORT = 3000;
const init = async () => {
  // await models.User.sync();
  // await models.Page.sync();
  await models.db.sync({ force: true });
  // start server
  app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
  });
}

init();