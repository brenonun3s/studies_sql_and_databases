use empresa

db.vendas.insertMany([
    {
        produto: "Notebook", categoria: "eletrônicos", quantidade: 3, preco_unitario: 3500.00,
        valor_total: 10500.00, vendedor: "João", data_venda: new Date("2024-03-01"), regiao: "Sudeste"
    },
    {
        produto: "Mouse", categoria: "periféricos", quantidade: 10, preco_unitario: 89.90,
        valor_total: 899.00, vendedor: "Maria", data_venda: new Date("2024-03-02"), regiao: "Sul"
    },
    {
        produto: "Teclado", categoria: "periféricos", quantidade: 5, preco_unitario: 250.00,
        valor_total: 1250.00, vendedor: "João", data_venda: new Date("2024-03-03"), regiao: "Sudeste"
    },
    {
        produto: "Monitor", categoria: "eletrônicos", quantidade: 2, preco_unitario: 899.00,
        valor_total: 1798.00, vendedor: "Pedro", data_venda: new Date("2024-03-04"), regiao: "Nordeste"
    },
    {
        produto: "Smartphone", categoria: "eletrônicos", quantidade: 4, preco_unitario: 1999.90,
        valor_total: 7999.60, vendedor: "Maria", data_venda: new Date("2024-03-05"), regiao: "Sudeste"
    },
    {
        produto: "Fone Bluetooth", categoria: "áudio", quantidade: 8, preco_unitario: 199.90,
        valor_total: 1599.20, vendedor: "João", data_venda: new Date("2024-03-06"), regiao: "Sul"
    },
    {
        produto: "Tablet", categoria: "eletrônicos", quantidade: 3, preco_unitario: 1299.00,
        valor_total: 3897.00, vendedor: "Ana", data_venda: new Date("2024-03-07"), regiao: "Centro-Oeste"
    },
    {
        produto: "Cabo USB", categoria: "acessórios", quantidade: 20, preco_unitario: 29.90,
        valor_total: 598.00, vendedor: "Pedro", data_venda: new Date("2024-03-08"), regiao: "Nordeste"
    },
    {
        produto: "Webcam", categoria: "periféricos", quantidade: 4, preco_unitario: 349.90,
        valor_total: 1399.60, vendedor: "Ana", data_venda: new Date("2024-03-09"), regiao: "Sudeste"
    },
    {
        produto: "Impressora", categoria: "periféricos", quantidade: 1, preco_unitario: 890.00,
        valor_total: 890.00, vendedor: "Maria", data_venda: new Date("2024-03-10"), regiao: "Sul"
    }
])

db.vendas.aggregate([
    {
        $group: {
            _id: "$categoria",
            total_faturado: { $sum: "$valor_total" }
        }
    },
    {
        $project: {
            categoria: "$_id",
            total_faturado: { $round: ["$total_faturado", 2] },
            _id: 0
        }
    }
])

db.vendas.aggregate([
    {
        $group: {
            _id: "$vendedor",
            quantidade: { $sum: 1 },
            total_faturado: { $sum: "$valor_total" }
        }
    },
    {
        $sort: { quantidade: -1 }
    }
])

db.vendas.aggregate([
    {
        $group: {
            _id: "$vendedor",
            maior_venda: { $max: "$valor_total" },
            produto_top: { $max: "$produto" }
        }
    }
])