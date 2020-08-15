const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
// HBS ENGINE
hbs.registerPartials(__dirname + '/views/parciales' );

app.set('view engine', 'hbs');


app.get('/', (req, res) => {

  res.render('home.hbs', {
    nombre: 'Guillermo',
    anio: new Date().getFullYear()
  }); 

});

app.get('/about', (req, res) => {

    res.render('about', {
      anio: new Date().getFullYear()
    }); 
  
  })


// app.get('/data', (req, res) => {
//       res.send('Hola Data')
    
//     })
 
app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
});
