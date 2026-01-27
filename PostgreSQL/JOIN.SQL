-- PostgreSQL (case-insensitive por padrão, usa snake_case)
SELECT 
    c.nome,
    c.sexo,
    e.bairro,
    e.cidade
FROM public.cliente c
INNER JOIN public.endereco e ON c.idcliente = e.id_cliente
ORDER BY c.nome;

-- Alternativa PostgreSQL (com CTE se necessário)
WITH clientes_enderecos AS (
    SELECT 
        c.nome,
        c.sexo,
        e.bairro,
        e.cidade
    FROM cliente c
    JOIN endereco e ON c.idcliente = e.id_cliente
)
SELECT * FROM clientes_enderecos;