use ecommerce_db;

db.vendas.createIndex({ "cliente.estado": 1 })
db.vendas.createIndex({ "pedido.valorTotal": -1 })
db.vendas.createIndex({ "pedido.data": -1 })


db.vendas.insertMany([
    {
        cliente: {
            id: 1001, nome: "Ana Silva", email: "ana@email.com", cidade: "São Paulo", estado: "SP",
            dataCadastro: ISODate("2023-01-15")
        },
        pedido: { id: 5001, data: ISODate("2024-02-10"), status: "entregue", valorTotal: 299.90 },
        produtos: [{ id: 101, nome: "Camiseta", categoria: "roupas", preco: 49.90, quantidade: 2 }],
        pagamento: { metodo: "cartao", parcelas: 3, status: "aprovado" },
        avaliacao: 5
    },
    {
        cliente: {
            id: 1002, nome: "Carlos Lima", email: "carlos@yahoo.com", cidade: "Rio de Janeiro", estado: "RJ",
            dataCadastro: ISODate("2023-03-20")
        },
        pedido: { id: 5002, data: ISODate("2024-02-15"), status: "entregue", valorTotal: 1250.00 },
        produtos: [{ id: 201, nome: "Smartphone", categoria: "eletronicos", preco: 1250.00, quantidade: 1 }],
        pagamento: { metodo: "boleto", parcelas: 1, status: "aprovado" },
        avaliacao: 4
    },
    {
        cliente: {
            id: 1003, nome: "Mariana Souza", email: "mariana@gmail.com", cidade: "Belo Horizonte", estado:
                "MG", dataCadastro: ISODate("2023-02-10")
        },
        pedido: { id: 5003, data: ISODate("2024-02-20"), status: "cancelado", valorTotal: 89.90 },
        produtos: [{ id: 301, nome: "Livro MongoDB", categoria: "livros", preco: 89.90, quantidade: 1 }],
        pagamento: { metodo: "pix", parcelas: 1, status: "recusado" },
        avaliacao: null
    },
    {
        cliente: {
            id: 1004, nome: "João Pereira", email: "joao@hotmail.com", cidade: "São Paulo", estado: "SP",
            dataCadastro: ISODate("2023-04-05")
        },
        pedido: { id: 5004, data: ISODate("2024-02-25"), status: "entregue", valorTotal: 549.80 },
        produtos: [
            { id: 401, nome: "Mouse Gamer", categoria: "informatica", preco: 199.90, quantidade: 2 },
            { id: 402, nome: "Teclado Mecânico", categoria: "informatica", preco: 350.00, quantidade: 1 }
        ],
        pagamento: { metodo: "cartao", parcelas: 6, status: "aprovado" },
        avaliacao: 5
    },
    {
        cliente: {
            id: 1005, nome: "Fernanda Costa", email: "fernanda@gmail.com", cidade: "Curitiba", estado: "PR",
            dataCadastro: ISODate("2023-05-12")
        },
        pedido: { id: 5005, data: ISODate("2024-03-01"), status: "enviado", valorTotal: 189.90 },
        produtos: [{ id: 501, nome: "Fone Bluetooth", categoria: "audio", preco: 189.90, quantidade: 1 }],
        pagamento: { metodo: "pix", parcelas: 1, status: "aprovado" },
        avaliacao: 4
    }
])

// 2.1 - Operador $and Encontre todos os pedidos que foram realizados em São Paulo (SP) E têm valor total acima de R$ 500,00

db.vendas.find({
    "cliente.estado": "SP",
    "pedido.valorTotal": { $gt: 500}
})


// 2.2 - Operador $or Encontre pedidos que foram pagos com boleto OU estão com status "cancelado"
db.vendas.find({
    $or:[{
    "pagamento.metodo": "boleto",
    },
    {"pedido.status": "cancelado"
}]
})

//2.3 - Operador $nor Encontre pedidos que não são de clientes do Rio de Janeiro E não são da categoria "eletrônicos"

db.vendas.find({
    $nor:[
        {"cliente.estado": "RJ"},
        {"produtos.categoria": "eletrônicos"}
    ]
})

//2.4 - Operador $not combinado com $regex Encontre produtos cujo nome não começa com a letra "C"

db.vendas.find({
    "produtos.nome":
    {$not:{
        $regex: "^C", $options: "i"
    }}
})

//3.1 - Busca por padrão no email Encontre todos os clientes com email do domínio "gmail.com"

db.vendas.find({
    "cliente.email": {
        $regex: "gmail\\.com$"
    }
})

//3.2 - Busca case-insensitive Encontre produtos que contenham "camiseta" no nome (ignorando maiúsculas/minúsculas)
db.vendas.find({
    "produtos.nome":{
        $regex: "camiseta",
        $options: "i"
    }
})