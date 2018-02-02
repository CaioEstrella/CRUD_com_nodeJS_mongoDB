const express = require('express');
const router = express.Router();
const Planeta = require('../models/planetas');

/***cada rota 'router.get; router.post... trata um tipo de requisição'***
.get ; . post... são funçoes de express.***/

//----GET----------------------------------------------------
//rota para pegar uma lista de planetas do bd
router.get('/api/planetas', function(req,res,next){
	Planeta.find({}).then(function(planeta){
		res.send(planeta);
	});
});

//==procura por id em /id/:id

router.get('/api/planetas/id/:id',function(req,res,next){
	Planeta.find({ _id: req.params.id}).then(function(planeta){
		res.send(planeta);
	});
});

//== procura por nome em /nomes/:nomes
router.get('/api/planetas/nome/:nome', function(req,res,next){
	Planeta.find({nome: req.params.nome}).then(function(planeta){
		res.send(planeta);
	});
});

//==procura por numero de filmes  em /filmes/:filmes
router.get('/api/planetas/filmes/:filmes', function(req,res,next){
	Planeta.find({numero_de_filmes: req.params.filmes}).then(function(planeta){
		res.send(planeta);
	});
});


//----POST----------------------------------------------------

//rota para adicionar um planeta ao bd
router.post('/api/planetas', function(req,res,next){
    //cria uma nova instancia de Planeta e salva no bd
    Planeta.create(req.body).then(function(planeta){
    	res.send(planeta); //envia ao front o que está sendo salvo

/** ---- outra opção para salvar no bd 'planeta' que ao ser pluralizado torna-se 'planetas----'
	var planeta = new Planeta(req.body);
	planeta.save();
    **/
    }).catch(next);		
});

//------PUT--------------------------------------------------

//rota para update um planeta
router.put('/api/planetas/:id', function(req,res,next){
	Planeta.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
		Planeta.findOne({_id: req.params.id}).then(function(planeta){
			res.send('Você atualizou o registro: \n' + planeta);
		});
	});	
});

//----DELETE----------------------------------------------------
//rota para deletar um planeta
router.delete('/api/planetas/:id', function(req,res,next){
	Planeta.findByIdAndRemove({_id: req.params.id}).then(function(planeta){   /** 'planeta' é a coleção na constante planeta*/
		res.send('Você deletou: '+ '\n' + planeta);													
	}); //identifica o planeta por _id e remove
	
});

//============================
//permite exportar o modulo
module.exports = router;

