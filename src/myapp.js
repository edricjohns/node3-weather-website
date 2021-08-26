const path = require('path');
const express = require('express');

const app = express();

console.log(__dirname);
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res) => {
  res.render('index');
});

app.get('/Weather', (req, res) => {
  res.send('Weather Page');
});

app.listen(3000, () => {
  console.log('Server is UP on port 3000');
});
