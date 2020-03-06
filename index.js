const express = require ('express');
const path = require('path');
const app = express();
const files = path.join( __dirname, '/views'); 
//const img = path.join( __dirname, '/img'); 
app.use(express.static( path.join( __dirname, '/img'))); 
app.use(express.static( path.join( __dirname, '/public'))); 
app.use(express.static( path.join( __dirname, '/node_modules/bootstrap/dist/css'))); 
app.use(express.static( path.join( __dirname, '/node_modules/bootstrap/dist/js'))); 

app.use(express.static( path.join( __dirname, '/node_modules/jquery/dist')));
app.use(express.static( path.join( __dirname, '/node_modules/@popperjs/dist/src')));


//ruta principal
app.get('/', (req, res) => {
    res.sendFile( `${files}/index.html`);
});
// Ruta educacion
app.route('/eduProfesional').get ((req, res) => {
    res.sendFile(`${files}/educacion.html`);
});


app.route('/verificaru').get((req, res) => {   
        res.sendFile(`${files}/verificar.html`);     
});

// ___
app.route('/verificarRegistro').get((req, res) => {
     if(req.query.usuario === 'paola' && req.query.password === '123456') {
        res.sendFile(`${files}/userOk.html`);
     } else{
        res.sendFile(`${files}/userFail.html`);
     }    
});


app.listen(4300);