// definição de rota para acessar os usuários pela url /users usando o metodo http POST.
module.exports = app => {
  app.route('/users')
    .post(app.api.user.save)
  // .post vai associar qual metodo será chamado quando ele receber uma requisição nessa rota usando post.
  // consign usa o caminho app.api.user.save para chamar a instancia, acessar a api, entrar no arquivo user e pegar a função save retornada pelo modulo.
}

// um exemplo da mesma configuração, sem usar o consign:
// const user = require('../api.user')
// module.exports = app => {
//   app.route('/users')
//     .post(user.save)
// }