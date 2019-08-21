Passos para executar o projeto
-----------------------------------

### MySQL no Docker

1. Possuir Docker e Docker-Compose instalados no ambiente
2. Certificar que a porta 3306 está liberada
3. Executar o comando ``` $ docker-compose up ```
4. O Banco de dados deve estar executando na porta 3306 pronto para configuração

### Instalando/Atualizando Dependencias

1. Executar o commando ``` $ npm install ```
2. As dependencias do projeto estarão atualizadas

### Configurando o Banco para desenvolvimento

1. Executar o comando ``` $  npx sequelize-cli db:migrate ```
2. O banco de dados vai ser configurado conforme a pasta database do projeto
