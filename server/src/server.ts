import express from 'express';

const app = express();

app.use(express.json()); 

/*
* Rotas: Endereço completo da requisição
* Recurso: Qual entidade estamos acessando do sistema

* GET: Busca uma ou mais informações do back-end
* POST: Cria uma nova informação no back-end
* PUT: Edita uma informação no back-end
* DELETE: Deleta uma informação no back-end

! POST: http://localhost:3333/user = Cria um usuário
! GET: http://localhost:3333/user = Lista usuários
! GET: http://localhost:3333/user/5 = Busca um único usuário

* Request Params: Parâmetros que vem na própria rota, que indentificam um recurso
* Query Params:  Parâmetros que vem na própria rota, geralmente opcionais, para filtros, paginação etc..
* Request Body: São parâmetros para criação e atualização de informações
*/

const users = [
  'Iury',
  'Matheus',
  'Jefferson',
  'Ramon'
]

app.get('/users', (request, response) => {
  const search = String(request.query.search);

  const filteredUsers =  search ? users.filter(user => user.includes(search)) : users;

  return response.json(filteredUsers );
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

app.post('/users', (request, response) => {
  const data = request.body;

  const user = {
    name: data.name,
    email: data.email
  }

  return response.json(user);
});

app.listen(3333);