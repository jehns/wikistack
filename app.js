const morgan = require('morgan');
const express = require('express');
const app = express();

app.use(morgan('dev'));
// app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('hello world');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server connected on port ${PORT}`);
});