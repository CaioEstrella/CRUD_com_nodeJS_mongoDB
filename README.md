# CRUD_com_noteJS_mongoDB
< Mudar conexão com a nuvem apra conexão local. Comente a conexão com mLab e descomente conexão local e faça uma com mongod.exe e mongo.exe. Ao executar get/id/<numeroid>, retorna-se um JSON vazio. Parece ocorrer algum problema com a id na nuvem > 


api desenvolvida para get, put, delete, update de um bd dos planetas extraídos de The Star Wars API (https://swapi.co/)

*** Requisitos (modulos não inclusos neste repositório) ***
-NodeJS
-ExpressJS
-Mongoose
-Body-parser

******************************
TESTADO EM POSTMAN --> para rotas, ler arquivo ROTAS.TXT.
----------------
Banco localizado na nuvem em https://mlab.com/databases/starwarsbd


---------------------------------------------------------------------------------------------------

Banco salvo em mlab.com com foco nos planetas e dados de nome, clima e terreno no Schema :

{
    "_id": "5a737879299b7f0a5c98dd55",
    "nome": "Alderaan",
    "clima": "temperate",
    "terreno": "grasslands, mountains",
    "numero_de_filmes": 2,
    "__v": 0
}

