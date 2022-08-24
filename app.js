const express = require('express')
var hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estático
app.use( express.static('public') );

app.get('/', function (req, res) {
  res.render('home',{
    nombre: 'Martín',
    titulo: 'Curso Node'
  })
})

app.get('/generic', function (req, res) {
  res.render('generic',{
    nombre: 'Martín',
    titulo: 'Curso Node'
  })
})



app.get('/elements', function (req, res) {
  res.render('elements',{
    nombre: 'Martín',
    titulo: 'Curso Node'
  })})

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {

  console.log('Listening on port ' + port)

})