const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
  const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

  const saveCategoria = async (requisicao, resposta) => {

    const categoria = { ...requisicao.body }

    if (requisicao.params.id) categoria.id = requisicao.params.id

    try {
      existsOrError(categoria.descricao, 'Descrição não inserida.')
      // const funcionarioFromDB = await app.db('categoria').where({ id: categoria.id }).first()

      // if (!categoria.id) {
      //   notExistsOrError(funcionarioFromDB, 'categoria já cadastrada.')
      // }
    } catch (msg) {
      return resposta.status(400).send(msg)
    }

    if (categoria.id) {
      app.db('categoria')
        .update(categoria)
        .where({ id: categoria.id })
        .then(_ => resposta.status(204).send())
        .catch(err => resposta.status(500).send(err))

    } else {
      app.db('categoria')
        .insert(categoria)
        .then(_ => resposta.status(204).send())
        .catch(err => resposta.status(500).send(err))
    }
  }

  const getCategoria = (requisicao, resposta) => {
    app.db('categoria')
      .select('id', 'descricao')
      .then(categorias => resposta.json(categorias))
      .catch(err => resposta.status(500).send(err))

  }

  const getCategoriaById = (requisicao, resposta) => {
    app.db('categoria')
      .select('id', 'descricao')
      .where({ id: requisicao.params.id })
      .first()
      .then(categoria => resposta.json(categoria))
      .catch(err => resposta.status(500).send(err))
  }

  return { saveCategoria, getCategoria, getCategoriaById }
}
