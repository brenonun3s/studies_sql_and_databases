db.alunos.insertMany([
{
nome: "Ana",
idade: 21,
curso: "Ciência da Computação"
},
{
nome: "Carlos",
idade: 23,
curso: "Engenharia de Software",
ativo: true
},
{
nome: "Beatriz",
idade: 20,
curso: "Sistemas de Informação",
bolsista: true,
contato: {
email: "beatriz@email.com"
}
}
])

db.alunos.insertOne({
nome: "Maria",
idade: 22,
curso: "Sistemas de Informação"
})

db.alunos.insertOne({
nome: "Pedro",
idade: 25,
contato: {
email: "pedro@email.com",

telefone: "1199999999"
},
disciplinas: ["BD", "POO", "ES"]
})

db.alunos.insertOne({
nome: "Ana Beatriz",
idade: 20,
curso: "Medicina",
email: "ana@email.com",

ativo: true
})
// Aluno 2
db.alunos.insertOne({
nome: "Carlos Eduardo",
idade: 22,
curso: "Engenharia Civil",
contato: {
telefone: "11988887777",
endereco: "Rua A, 123"
}
})
// Aluno 3 (com array de interesses)
db.alunos.insertOne({
nome: "Mariana Souza",
idade: 21,
curso: "Direito",
interesses: ["estágio", "música", "esportes"],
ativo: true
})

db.alunos.insertMany([
{
nome: "João Pedro",
idade: 19,
curso: "Administração",
ativo: true
},
{
nome: "Luiza Fernandes",
idade: 23,
curso: "Psicologia",
ativo: false,
observacao: "Formanda"
},
{
nome: "Rafael Costa",
idade: 24,
curso: "Arquitetura",
contato: {
email: "rafael@email.com"
}
},
{
nome: "Fernanda Lima",
idade: 20,
curso: "Medicina",
interesses: ["pesquisa", "voluntariado"]
},
{
nome: "Lucas Mendes",
idade: 26,
curso: "Sistemas de Informação",
ativo: true,
disciplinas: ["BD", "Redes", "Programação"]
}
])

db.alunos.find()
// Pressione ENTER para ver mais resultados
// Versão formatada
db.alunos.find().pretty()
// Contar quantos alunos
db.alunos.countDocuments()
// Alunos com idade 20
db.alunos.find({ idade: 20 }).pretty()
// Alunos do curso Medicina
db.alunos.find({ curso: "Medicina" }).pretty()

// Alunos ativos
db.alunos.find({ ativo: true }).pretty()
// Alunos com mais de 22 anos
db.alunos.find({ idade: { $gt: 22 } }).pretty()
// Alunos de Medicina ou Direito
db.alunos.find({
$or: [
{ curso: "Medicina" },
{ curso: "Direito" }
]
}).pretty()