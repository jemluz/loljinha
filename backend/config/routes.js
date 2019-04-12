// definição de rota para acessar os usuários pela url /users usando o metodo http POST.
module.exports = app => {
  app.route('/clientes')
    .post(app.api.user.save)
    .get(app.api.user.get)
  // .post vai associar qual metodo será chamado quando ele receber uma requisição nessa rota usando post.
  // consign usa o caminho app.api.user.save para chamar a instancia, acessar a api, entrar no arquivo user e pegar a função save retornada pelo modulo.

  app.route('/clientes/:id')
    .put(app.api.user.save)
    .put(app.api.user.getById)
  // o método save serve tanto para inserir quanto para alterar um usuário, por isso a diferença entre o POST e o PUT está no parâmetro fornecido na url (no caso o :id ou a ausencia dele), é assim que o método descobri qual tipo de requisição está sendo feita
}

// um exemplo da mesma configuração, sem usar o consign:
// const user = require('../api.user')
// module.exports = app => {
//   app.route('/users')
//     .post(user.save)
// }