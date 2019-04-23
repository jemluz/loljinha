module.exports = app => {
  const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

  const save = async (requisicao, resposta) => {
    const produto = { ...requisicao.body }

    if(requisicao.params.id) produto = requisicao.params.id
    
    try {
      existsOrError(produto.descricao, 'Descrição não informada')
      existsOrError(produto.preco, 'Preço não informado')
      existsOrError(produto.categoriaId, 'Categoria não informada')

      const produtoFromDB = await 
      app.db('produto')
        .where({ id: produto.id })
        .first()

      if (!produto.id) {
        notExistsOrError(produtoFromDB, 'produto já cadastrado.')
      }
    } catch(msg) {
      return resposta.status(400).send(msg)
    }

    if (produto.id) {
      app.db('produto')
        .update(produto)
        .where({ id: produto.id})
        .then(_ => resposta.status(204))
        .catch(err => resposta.status(500).send(err))
    } else {
      app.db('produto')
        .insert(produto)
        .then(_ => resposta.status(204))
        .catch(err => resposta.status(500).send(err))
    }
  }

  const getProduto = (requisicao, resposta) => {
    app.db('produto')
      .select('id', 'descricao', 'preco', 'categoriaId')
      .then(categorias => resposta.json(produto))
      .catch(err => resposta.status(500).send(err))

  }

  const getProdutoById = (requisicao, resposta) => {
    app.db('categoria')
      .select('id', 'descricao', 'preco', 'categoriaId')
      .where({ id: requisicao.params.id })
      .first()
      .then(categoria => resposta.json(produto))
      .catch(err => resposta.status(500).send(err))
  }

  const removeProduto = async (requisicao, resposta) => {
    try{
      const rowsDeleted = await 
      app.db('produto')
        .where({ id: requisicao.params.id })
        .del()

      existsOrError(requisicao.params.id, 'Código do produto não informado.')

      resposta.status(204).send()
    } catch (msg) {
      resposta.status(400).send(msg)
    }
  }

}