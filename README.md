# fastfeet-backend

  ### (O projeto ainda está em progresso)
  ## O projeto FastFeet backend é uma api de uma transportadora para o desafio 2 do bootcamp GoStack da Rocketseat.

### Pré-requisitos

   - node e yarn instalados

### Instalando

  - Clone o repositório, logo após clonar o repositório, inicie o comando no seu terminal:
  
  ```
  yarn
  ```
  
  - Agora, para acessar seu banco de dados, edite os dados do arquivo no diretório com os dados do seu banco:
  
  ```
  src/config/database.js
  ```
  
  - Após a configuração do seu banco, acesse seu gerênciador de banco de dados e crie um banco de dados com o nome "fastfeet".

  - Agora, você deverá fazer as migrations das configurações das tabelas para seu banco, com o terminal execute os comandos:
  
  ```
  yarn sequelize db:migrate
  yarn sequelize db:seed:all
  ```
  
### Iniciando a aplicação

  - Após a instalação de todas as dependências e fazer as migrations, para iniciar a aplicação, basta utilizar o comando em seu terminal: 

  ```
  yarn dev
  ```
  
### Utilização

Na api existem algumas rotas que podem ser utilizadas:
  
  (pode logar com um usuário que já foi criado no banco de dados email: "admin@fastfeet.com", e password: "123456"
  ```
  http://localhost:3000/session via POST passando os dados de usário "email, password" registra um token jwt que deve ser utilizado como Auth Bearer no header das próximas requisições
  ```
  
  Apenas passando o token jwt recebido na requisição acima no header para conseguir operar nas próximas requisições.
  
  ```
  http://localhost:3000/user via POST armazena um usuário, com os dados "name, email, password"

  http://localhost:3000/recipients     via POST armazena os dados "name, street, number, complement, state, city, cep" 
  http://localhost:3000/recipients     via GET mostra todos os recebedores
  http://localhost:3000/recipients/:id via GET passando o id por parâmetro, mostra um recebedor específico
  http://localhost:3000/recipients/:id via PUT passando o id por parâmetro, altera um recebedor
  http://localhost:3000/recipients/:id via DELETE passando o id por parâmetro, deleta o recebedor com o id passado
  ```
