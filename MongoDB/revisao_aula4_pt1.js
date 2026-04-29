
use('cinema')

db.filmes.insertMany([
{
titulo: "O Poderoso Chefão",
ano: 1972,
diretor: "Francis Ford Coppola",
genero: ["Drama", "Crime"],
duracao: 175,
pais: "EUA",
oscar: true,
orcamento: 6000000
},
{
titulo: "Interestelar",
ano: 2014,
diretor: "Christopher Nolan",
genero: ["Ficção", "Aventura", "Drama"],
duracao: 169,
pais: "EUA",
oscar: false,
orcamento: 165000000
},
{
titulo: "Matrix",
ano: 1999,
diretor: "Irmãs Wachowski",
genero: ["Ação", "Ficção"],
duracao: 136,
pais: "EUA",
oscar: false,
orcamento: 63000000
},
{
titulo: "Pulp Fiction",
ano: 1994,
diretor: "Quentin Tarantino",
genero: ["Crime", "Drama"],
duracao: 154,
pais: "EUA",
oscar: true,
orcamento: 8000000

}
])

db.filmes.insertMany([
{
titulo: "Cidade de Deus",
ano: 2002,
diretor: "Fernando Meirelles",
genero: ["Drama", "Crime"],
duracao: 130,
pais: "Brasil",
oscar: false,
orcamento: 3300000
},
{
titulo: "Clube da Luta",
ano: 1999,
diretor: "David Fincher",
genero: ["Drama"],
duracao: 139,
pais: "EUA",
oscar: false,
orcamento: 63000000
},
{
titulo: "O Senhor dos Anéis: O Retorno do Rei",
ano: 2003,
diretor: "Peter Jackson",
genero: ["Fantasia", "Aventura"],
duracao: 201,
pais: "Nova Zelândia",
oscar: true,
orcamento: 94000000
},
{
titulo: "Central do Brasil",
ano: 1998,
diretor: "Walter Salles",
genero: ["Drama"],
duracao: 110,
pais: "Brasil",
oscar: false,
orcamento: 2900000
}
])

db.filmes.countDocuments() 

db.filmes.find({ pais: "Brasil" }).pretty()

db.filmes.find({ ano: 1999 }).pretty()

db.filmes.find({ oscar: true }).pretty()

db.filmes.find({ genero: "Drama" }).pretty() 

db.filmes.find({ duracao: { $gt: 150 } }).pretty()

db.filmes.find({ ano: { $lt: 2000 } }).pretty()

db.filmes.find({ $or: [{ diretor: "Christopher Nolan" }, { diretor: "Quentin Tarantino" }]}).pretty()

db.filmes.find({ ano: { $in: [1994, 1999, 2014] }}).pretty()

db.filmes.find({ pais: "Brasil"}, {ano: 1, titulo: 1, diretor: 1, _id : 0}).pretty()

db.filmes.find({ ano: 1999 }, {titulo: 1, genero: 1, _id: 0}).pretty()

db.filmes.find({ oscar: true }, {titulo: 1, ano: 1, diretor: 1, _id: 0}).pretty()

db.filmes.find({ duracao: { $gt: 150 } }, {titulo: 1, duracao: 1, _id: 0}).pretty()

db.filmes
  .find(
    { diretor: "Christopher Nolan" },
    { titulo: 1, ano: 1 }
  )
  .pretty()

