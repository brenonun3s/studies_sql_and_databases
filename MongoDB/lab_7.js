// Inserir documentos de exemplo
db.posts.insertMany([
    {
        titulo: "Introdução ao MongoDB",
        conteudo: "MongoDB é um banco de dados NoSQL orientado a documentos...",
        autor: { id: 1, nome: "Ana Silva", email: "ana@blog.com", perfil: "admin" },
        dataPublicacao: ISODate("2024-01-15"),
        tags: ["mongodb", "nosql", "database", "iniciante"],
        categoria: "tecnologia",
        visualizacoes: 1250,
        comentarios: [
            {
                id: 101, autor: "Carlos Lima", email: "carlos@email.com", conteudo: "Ótimo artigo!", data:
                    ISODate("2024-01-16"), likes: 5, aprovado: true
            },
            {
                id: 102, autor: "Mariana Souza", email: "mariana@email.com", conteudo: "Poderia falar mais sobreíndices?", data: ISODate("2024-01-17"), likes: 2, aprovado: true
            }
        ],
        status: "publicado"
    },
    {
        titulo: "Expressões Regulares em MongoDB",
        conteudo: "As expressões regulares permitem buscas poderosas...",
        autor: { id: 2, nome: "Carlos Lima", email: "carlos@blog.com", perfil: "editor" },
        dataPublicacao: ISODate("2024-01-20"),
        tags: ["mongodb", "regex", "consultas", "avancado"],
        categoria: "tecnologia",
        visualizacoes: 890,
        comentarios: [
            {
                id: 201, autor: "Ana Silva", email: "ana@email.com", conteudo: "Muito útil, obrigada!", data:
                    ISODate("2024-01-21"), likes: 8, aprovado: true
            },
            {
                id: 202, autor: "João Pereira", email: "joao@email.com", conteudo: "Poderia dar mais exemplos práticos?",
                data: ISODate("2024-01-22"), likes: 3, aprovado: true
            },
            {
                id: 203, autor: "Spam User", email: "spam@spam.com", conteudo: "Compre produtos baratos!", data:
                    ISODate("2024-01-23"), likes: 0, aprovado: false
            }
        ],
        status: "publicado"
    },
    {
        titulo: "Técnicas Avançadas de Aggregation",
        conteudo: "O aggregation framework permite análises complexas...",
        autor: { id: 3, nome: "Mariana Souza", email: "mariana@blog.com", perfil: "autor" },
        dataPublicacao: ISODate("2024-02-01"),
        tags: ["mongodb", "aggregation", "pipeline", "avancado"],
        categoria: "tecnologia",
        visualizacoes: 2100,
        comentarios: [
            {
                id: 301, autor: "Carlos Lima", email: "carlos@email.com", conteudo: "Excelente conteúdo!", data:
                    ISODate("2024-02-02"), likes: 12, aprovado: true
            }
        ],
        status: "publicado"
    },
    {
        titulo: "Dicas de Performance no MongoDB",
        conteudo: "Índices são fundamentais para performance...",
        autor: { id: 1, nome: "Ana Silva", email: "ana@blog.com", perfil: "admin" },
        dataPublicacao: ISODate("2024-02-10"),
        tags: ["mongodb", "performance", "indices", "otimizacao"],
        categoria: "tecnologia",
        visualizacoes: 3450,
        comentarios: [],
        status: "publicado"
    },
    {
        titulo: "Introdução ao Node.js",
        conteudo: "Node.js é um ambiente de execução JavaScript...",
        autor: { id: 4, nome: "Fernanda Costa", email: "fernanda@blog.com", perfil: "autor" },
        dataPublicacao: ISODate("2024-02-15"),
        tags: ["nodejs", "javascript", "backend", "iniciante"],
        categoria: "programacao",
        visualizacoes: 560,
        comentarios: [
            {
                id: 401, autor: "Ana Silva", email: "ana@email.com", conteudo: "Ótimo para quem está começando!", data:
                    ISODate("2024-02-16"), likes: 4, aprovado: true
            },
            {
                id: 402, autor: "Carlos Lima", email: "carlos@email.com", conteudo: "Gostaria de ver sobre async/await",
                data: ISODate("2024-02-17"), likes: 6, aprovado: true
            }
        ],
        status: "rascunho"
    },
    {
        titulo: "React Hooks na Prática",
        conteudo: "Hooks revolucionaram o desenvolvimento React...",
        autor: { id: 5, nome: "Lucas Oliveira", email: "lucas@blog.com", perfil: "autor" },
        dataPublicacao: ISODate("2024-02-20"),
        tags: ["react", "frontend", "hooks", "javascript"],
        categoria: "programacao",
        visualizacoes: 1870,
        comentarios: [
            {
                id: 501, autor: "Mariana Souza", email: "mariana@email.com", conteudo: "Muito prático!", data:
                    ISODate("2024-02-21"), likes: 7, aprovado: true
            },
            {
                id: 502, autor: "João Pereira", email: "joao@email.com", conteudo: "Qual a diferença entre useEffect e useLayoutEffect?", data: ISODate("2024-02-22"), likes: 2, aprovado: true
            },
            {
                id: 503, autor: "Spam Bot", email: "bot@spam.com", conteudo: "Clique aqui para ganhar dinheiro!", data:
                    ISODate("2024-02-23"), likes: 0, aprovado: false
            }
        ],
        status: "publicado"
    }
])

db.posts.find(
    
)