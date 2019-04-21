// module.exports = app => {
//   const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

//   const save = (requisicao, resposta) => {
//     const category = { ...requisicao.body }
//     if (requisicao.params.id) category.id = requisicao.params.id

//     try {
//       existsOrError(category.descricao, 'Categoria não informada.')
//     } catch (msg) {
//       return resposta.status(400).send(msg)
//     }

//     if (category.id) {
//       app.db('categoria')
//         .update(category)
//         .where({ id: category.id })
//         .then(_ => resposta.status(204).send())
//         .catch(err => resposta.status(500).send(err))
//     } else {
//       app.db('categoria')
//         .insert(category)
//         .then(_ => resposta.status(204).send())
//         .catch(err => resposta.status(500).send(err))
//     }

//     const remove = async (requisicao, resposta) => {
//       try {
        
//       }
//     }
//   }
// }