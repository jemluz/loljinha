module.exports = app => {
  const save = (requisicao, resposta) => {
    resposta.send('user save')
  }
  return { save }
} // module exports retorna um objeto com as funções do escopo 