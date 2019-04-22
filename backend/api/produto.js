module.exports = app => {
  const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

  const save = (requisicao, resposta) => {
    const produto = { ...requisicao.body }
    if(requisicao.params.id) produto = requisicao.params.id
    try {
      existsOrError(produto.descricao, 'Descrição não informada')
      existsOrError(produto.preco, 'Preço não informado')
      existsOrError(produto.preco, 'Categoria não informada')
    } catch(msg) {
      return resposta.status(400).send(msg)
    }

    if (produto.id) {
      app.db('produto')
        .update(categoria)
        .where({ id: categoria.id})
        .then(_ => resposta.status(204))
    }
  }

}