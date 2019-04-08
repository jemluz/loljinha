const bcrypt = require('bcrypt-nodejs')
// importando o bcrypt

module.exports = app => {
  const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

  const encryptPass = password => {
    const salt = bcrypt.genSaltSync(10)
    // tempero da senha - hashs que são geradas a partir da senha, quando chamado em momentos diferentes são geradas hashs diferentes
    return bcrypt.hashSync(password, salt)
    // retorna a senha criptografada
  }

  const save = async (requisicao, resposta) => {
  // metodod para inserir e alterar um usuário 
    // resposta.send('user save')
    
    const cliente = { ...requisicao.body }
    // no body da requisição há um json, que é interceptado pelo bodyparse, gerando um objeto 
    
    if (requisicao.params.id) cliente.id =  req.params.id
    // verifica se um id foi passado aos parametros da requisição e o atribui para o id de user

    try {
    // tratamento de falhas
      existsOrError(cliente.name, 'nome não inserido')
      existsOrError(user.login, 'login não inserido')
      existsOrError(user.senha, 'senha não inserida')
    }
  }

  return { save }
} // module exports retorna um objeto com as funções do escopo 