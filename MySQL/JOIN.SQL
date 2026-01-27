-- MySQL (backticks opcionais, geralmente sem schema)
SELECT 
    `c`.`nome`,
    `c`.`sexo`,
    `e`.`bairro`,
    `e`.`cidade`
FROM `cliente` AS `c`
INNER JOIN `endereco` AS `e` 
    ON `c`.`idcliente` = `e`.`id_cliente`
WHERE 1=1  -- Comum em MySQL para facilitar comentários dinâmicos
ORDER BY `c`.`nome` ASC;

-- MySQL alternativo (mais simples)
SELECT 
    c.nome,
    c.sexo,
    e.bairro,
    e.cidade
FROM cliente c, endereco e
WHERE c.idcliente = e.id_cliente;