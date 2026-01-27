-- SQL Server (usa dbo schema, PascalCase comum)
SELECT 
    cli.Nome,
    cli.Sexo,
    end.Bairro,
    end.Cidade
FROM dbo.Cliente cli
INNER JOIN dbo.Endereco end 
    ON cli.IDCliente = end.ID_Cliente
ORDER BY cli.Nome;

-- SQL Server com NOLOCK (se necessário para performance)
SELECT 
    cli.Nome,
    cli.Sexo,
    end.Bairro,
    end.Cidade
FROM dbo.Cliente cli WITH (NOLOCK)
INNER JOIN dbo.Endereco end WITH (NOLOCK)
    ON cli.IDCliente = end.ID_Cliente
WHERE cli.Ativo = 1  -- Filtro comum em SQL Server
ORDER BY cli.Nome;