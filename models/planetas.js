const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//cria schema e modelo de planetas
const PlanetaSchema = new Schema({
	nome: {
		type: String,
		required:[true, 'Nome do planeta faltando']
	},
	clima: {
		type: String
		
	},
	terreno: {
		type: String
		
	},
	numero_de_filmes: {
		type: Number
	}

	//adicionar filmes em que aparece

});
				//o bd planeta será pluralizado 
const Planeta = mongoose.model('planeta', PlanetaSchema);
module.exports = Planeta;