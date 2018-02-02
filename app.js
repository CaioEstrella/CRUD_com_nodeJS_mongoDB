const express = require('express');
const routes = require('./routes/api'); //importa o módulo api.js com as rotas. **Não confundir a localização do arquivo com rota.**
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//setar o expres.
const app = express();

//db = mongoose.connect('mongodb://localhost/planetasstarwars');

//usuario: caioe  --- senha: node123  --------> conecta ao mLab.
db = mongoose.connect('mongodb://caioe:node123@ds121588.mlab.com:21588/starwarsbd');
mongoose.Promisse = global.Promisse; //override do promisse do mongoo, pois está depreciado


//body parser para permitir interação entre o corpo da requisição e da resposta
app.use(bodyParser.json());
//inicializa rotas
app.use(routes);

//.next ==> error handling middleware;; funçoes de loopback podem ter até 4 parametros.
app.use(function(err, req, res,next){
	//console.log(err);
	res.status(422).send({erro:err.message});
});


//-------------ouvir requests-------------
//In many environments (e.g. Heroku), and as a convention, you can set the environment variable PORT to tell your web server what port to listen on.
app.listen(process.env.port || 4000, function(){
	console.log('Agora ouvindo requests');

});

