/* definição de rota para acessar os usuários pela url /clientes usando o metodo http POST.

.all() é um filtro que chama o metodo autenticate do arquivo passport para validar a sessão e a partir disso permitir ou negar o acesso aos serviços da aplicação
.post vai associar qual metodo será chamado quando ele receber uma requisição nessa rota usando post.
consign usa o caminho app.api.cliente.save para chamar a instancia, acessar a api, entrar no arquivo cliente e pegar a função save retornada pelo modulo.

um exemplo da mesma configuração, sem usar o consign:
const cliente = require('../api.cliente')
module.exports = app => {app.route('/clientes').post(cliente.save)}
*/

module.exports = app => {
  //publicas ocultas, disponiveis para qualquer usuário, mas não inclusas nas rotas do frontend
  app.post('/signin', app.api.auth.signin)
  app.post('/signup', app.api.usuario.saveUser)
  app.post('/validateToken', app.api.auth.validateToken)
  app.get('/produtos', app.api.produto.getProduto)
  app.get('/categorias', app.api.categoria.getCategoria)
  app.get('/produtos/:id', app.api.produto.getProdutoById)

  //protegidas
  app.route('/usuarios')
    .all(app.config.passport.authenticate())
    .get(app.api.usuario.getUser)
  
  app.route('/usuarios/:login')
    .all(app.config.passport.authenticate())
    .put(app.api.usuario.saveUser)
    .get(app.api.usuario.getUserByLogin)
    .delete(app.api.usuario.removeUser)
  // o método save serve tanto para inserir quanto para alterar um usuário, por isso a diferença entre o POST e o PUT está no parâmetro fornecido na url (no caso o :id ou a ausencia dele), é assim que o método descobri qual tipo de requisição está sendo feita

  app.route('/categorias')
    .all(app.config.passport.authenticate())
    .post(app.api.categoria.saveCategoria)

  app.route('/categorias/:id')
    .all(app.config.passport.authenticate())
    .put(app.api.categoria.saveCategoria)
    .get(app.api.categoria.getCategoriaById)
    .delete(app.api.categoria.removeCategoria)

  app.route('/produtos')
    .all(app.config.passport.authenticate())
    .post(app.api.produto.saveProduto)

  app.route('/produtos/:id')
    .all(app.config.passport.authenticate())
    .put(app.api.produto.saveProduto)
    .delete(app.api.produto.removeProduto)

  app.route('/produtos/:cat')
    .get(app.api.produto.getProdutoByCat)

}

