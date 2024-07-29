# API de Produtos - Lexcode

API criada no curso de Backend I da plataforma Lexcode

## Clonando e iniciando

Para iniciar o projeto a primeira vez rode os seguintes os comandos:

_Baixar dependências e inciar localmente:_

```bash
npm install && npm run dev
```

_Gerar build_

```bash
npm run build
```

_Iniciar o código de produção_

```bash
npm run start
```

## Rotas da aplicação

### Produtos

#### POST /products - Criação de produtos

Padrão corpo

```json
{
  "name": "Notebook Gamer",
  "description?": "Notebook gamer top",
  "price": 3000
}
```

Padrão de resposta (201)

```json
{
  "id": 1,
  "name": "Notebook Gamer",
  "description": "Notebook gamer top",
  "price": 3000,
  "createdAt": "2024-07-29T21:44:23.601Z"
}
```

##### Possíveis erros:

- Erro (400) - Missing body parameters

#### GET /products - Leitura de produtos

Padrão de resposta (200)

```json
{
  "count": 1,
  "pagedResults": [
    {
      "id": 1,
      "name": "Notebook Gamer",
      "price": 3000,
      "createdAt": "2024-07-26T22:26:07.977Z"
    }
  ]
}
```

##### Parâmetros (query)

| Parâmetro | Descrição                                   |
| --------- | ------------------------------------------- |
| search    | Termo de busca                              |
| count     | Quantidade de itens por página (padrão: 10) |
| skip      | Quantos itens devem ser pulados (padrão: 0) |

#### GET /products/:id - Leitura de produto individual

Padrão de resposta (200)

```json
{
  "id": 1,
  "name": "Notebook Gamer",
  "price": 3000,
  "createdAt": "2024-07-29T21:41:41.961Z"
}
```

##### Possíveis erros:

- Erro (404) - Produto não encontrado

#### PATCH /products/:id - Atualização de produto

Padrão de corpo

```json
{
  "name?": "Notebook Gamer",
  "description?": "Notebook gamer top",
  "price?": 3000
}
```

Padrão de resposta (200)

```json
{
  "id": 1,
  "name": "Notebook Gamer X",
  "description": "Notebook gamer top",
  "price": 3000,
  "createdAt": "2024-07-26T22:25:25.844Z",
  "updatedAt": "2024-07-26T22:25:32.893Z"
}
```

##### Possíveis erros:

- Erro (404) - Produto não encontrado
