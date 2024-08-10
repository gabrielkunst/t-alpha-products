# T-Alpha Products

## Descrição

Este repositório contém o frontend de um sistema com autenticação e CRUD de produtos, consumindo uma API externa. O projeto permite aos usuários se autenticar e gerenciar produtos, incluindo operações de criação, leitura, atualização e exclusão (CRUD).

## Tecnologias Utilizadas

- **Frontend**: NextJS, React, TypeScript, Tailwind CSS
- **Autenticação**: JWT

## Funcionalidades

- **Autenticação de Usuários**
  - Login
  - Registro de Usuário
- **Gerenciamento de Produtos**
  - Criar novo produto
  - Listar todos os produtos
  - Buscar produto específico por ID
  - Atualizar informações de um produto
  - Deletar um produto

### Endpoints da API

#### Autenticação

1. **Realizar Login**

   - **Endpoint**: `POST /api/auth/login`
   - **Descrição**: Realiza o login do usuário e retorna um token JWT.
   - **Body**:
     ```json
     {
       "taxNumber": "string",
       "password": "string"
     }
     ```

2. **Registrar Usuário**
   - **Endpoint**: `POST /api/auth/register`
   - **Descrição**: Registra um novo usuário.
   - **Body**:
     ```json
     {
       "name": "string",
       "taxNumber": "string",
       "mail": "string",
       "phone": "string",
       "password": "string"
     }
     ```

#### Produtos

1. **Criar Produto**

   - **Endpoint**: `POST /api/products/create-product`
   - **Descrição**: Cria um novo produto.
   - **Body**:
     ```json
     {
       "name": "string",
       "description": "string",
       "price": "number",
       "stock": "number"
     }
     ```

2. **Buscar Todos os Produtos**

   - **Endpoint**: `GET /api/products/get-all-products`
   - **Descrição**: Obtém a lista de todos os produtos.

3. **Buscar um Produto**

   - **Endpoint**: `GET /api/products/get-one-product/{id}`
   - **Descrição**: Obtém detalhes de um produto específico pelo ID.

4. **Atualizar Produto**

   - **Endpoint**: `PATCH /api/products/update-product/{id}`
   - **Descrição**: Atualiza as informações de um produto específico.
   - **Body**:
     ```json
     {
       "name": "string",
       "description": "string",
       "price": "number",
       "stock": "number"
     }
     ```

5. **Deletar Produto**
   - **Endpoint**: `DELETE /api/products/delete-product/{id}`
   - **Descrição**: Deleta um produto específico pelo ID.
