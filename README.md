# Opyt-project

MINI PROJETO GROWTH é um projeto de avaliação.

## Instalação

Ao [clonar o repositório](https://github.com/fabianoone/Opyt-project.git) projeto, você encontrará duas subpastas, uma para o frontend e outra para backend.
Utilize o gerenciador de pacotes [npm](https://www.npmjs.com/) para rodar o projeto.

Dentro da pasta backend, instale as dependências rodando o seguinte comando:
```bash
npm i
```
e em seguida, suba o servidor Node.js que estará disponível em http://localhost:4000.
```
npm run start

```

Dentro da pasta frontend, instale as dependências do projeto rodando o seguinte comando:
```bash
npm i
```
e em seguida, rode o projeto Next.js que estará disponível em http://localhost:3000.
```
npm run dev
```
## MySQL
Crie um arquivo .env no diretório backend, inserindo as seguintes constantes:

````python
# Importante!
## Explicativa da String de conexão com o MySQL:
DATABASE_URL="mysql://{usuário_banco_de_dados}:{senha_banco_de_dados}@{host_do_banco}:{porta_banco_de_dados}/{nome_banco_de_dados}"

DATABASE_URL="mysql://root:password@localhost:3306/opyt_project"
PORT=4000
````
Não esqueça de criar um banco de dados para o cadastro dos Leads, neste exemplo nomeei o banco de dados para **opyt_project**
