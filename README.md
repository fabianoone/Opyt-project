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
```bash
npm run start

```

Dentro da pasta frontend, instale as dependências do projeto rodando o seguinte comando:
```bash
npm i
```
e em seguida, rode o projeto Next.js que estará disponível em http://localhost:3000.
```bash
npm run dev
```
## MySQL
Crie um arquivo .env no diretório backend, inserindo as seguintes constantes:

```bash
# arquivo .env
DATABASE_URL="mysql://root:password@localhost:3306/opyt_project"
PORT=4000
```

**Definição da String de conexão com o MySQL:** 

**mysql://** = drive do tipo de banco será feito a conexão.
**root** = usuário do banco de dados.  
**password** = senha do banco de dados.  
**localhost** = host do banco de dados.  
**3306** = porta de conexão do banco de dados.  

Não esqueça de criar um banco de dados para o cadastro dos Leads, neste exemplo nomeei o banco de dados para **opyt_project**
