module.exports = app => {
  const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

  const saveProduto = async (requisicao, resposta) => {
    const produto = { ...requisicao.body }

    if(requisicao.params.id) produto.id = requisicao.params.id
    
    try {
      existsOrError(produto.descricao, 'Descrição não inserida.')
      existsOrError(produto.preco, 'Preço não inserido.')
      existsOrError(produto.categoriaId, 'Categoria não inserida.')

      // const produtoFromDB = await 
      // app.db('produto')
      //   .where({ descricao: produto.descricao })
      //   .first()

      // if (!produto.id) {
      //   notExistsOrError(produtoFromDB, 'produto já cadastrado.')
      // }
    } catch(msg) {
      return resposta.status(400).send(msg)
    }

    const produtoFromDB = await 
      app.db('produto')
        .where({ descricao: produto.descricao })
        .first()

    if (produtoFromDB) {
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
      .then(produtos => resposta.json(produtos))
      .catch(err => resposta.status(500).send(err))

  }

  const getProdutoById = (requisicao, resposta) => {
    app.db('produto')
      .select('id', 'descricao', 'preco', 'categoriaId')
      .where({ id: requisicao.params.id })
      .first()
      .then(produto => resposta.json(produto))
      .catch(err => resposta.status(500).send(err))
  }

  const removeProduto = async (requisicao, resposta) => {
    try{
      existsOrError(requisicao.params.id, 'Código do produto não informado.')

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

  return { saveProduto, getProduto, getProdutoById, removeProduto }
}