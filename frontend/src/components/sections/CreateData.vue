<template lang='pug'>
  div.intro-section#create-section
    div.slide-1
      div.container
        div(class="row align-items-center")
          div.col-12
            div(class="row align-items-center")

              div(class="col-lg-6 mb-4")
                h1(
                  data-aos="fade-up" 
                  data-aos-delay="100"
                  ) Clientes Felizes

                p(
                  class="mb-4" 
                  data-aos="fade-up" 
                  data-aos-delay="200"
                  ) Aqui na loljinha nossos clientes possuem nome, login e senha. #[br] Experimente iserir esses dados no cadastro!

              div(
                class="col-lg-5 ml-auto"               data-aos="fade-up" 
                data-aos-delay="500"
              )

                form(
                  class="form-box"
                )
                  h3(class="h4 text-black mb-4") Cadastrar Cliente

                  div.form-group
                    input(
                      type="text" 
                      class="form-control" 
                      placeholder="Seu nome aqui :)"
                      v-model='cliente.nome'
                    )

                  div.form-group
                    input(
                      type="text" 
                      class="form-control" 
                      placeholder="...e o login!"
                      v-model='cliente.login'
                    )

                  div.form-group
                    input(
                      type="password" 
                      class="form-control" 
                      placeholder="Ah! Tem a senha também."
                      v-model='cliente.senha'
                    )

                  div.form-group
                    input(
                      type="password" 
                      class="form-control" 
                      placeholder="Pode repetir a senha?"
                      v-model='cliente.confirmarSenha'
                    )

                  div.form-group
                    input(
                      type='button'
                      class="btn btn-primary btn-pill" 
                      v-if="mode === 'save'"
                      @click="save"
                      value="Criar cadastro"
                    )
                    input(
                      type='button'
                      class="btn btn-primary btn-pill" 
                      v-if="mode === 'remove'"
                      @click="remove"
                      value="Excluir cadastro"
                    )              
                    input(
                      type='button'
                      class="btn btn-dark danger ml-3 btn-pill" 
                      @click="reset"
                      value="limpar"                     
                    )

</template>

<script>
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'
// o axios é responsável por enviar requisições da view

export default {
  name: 'CreateData',
  data: function() {
    return {
      mode: 'save', 
      cliente: {},
      clientes: [],
      fields: [
        { key: 'login', label: 'Login', sortable: true},
        { key: 'nome', label: 'Nome', sortable: true },
        { key: 'senha', label: 'Senha', sortable: true},
        { key: 'actions', label: 'Ações'}
      ]
    }
  },
  methods: {
    loadClientes() {
      // utiliza uma url pra fazer uma requisição com o axios e carregar um array de clientes
      const url = `${baseApiUrl}/clientes`
      axios.get(url).then(resposta => {
        this.clientes = resposta.data
        // console.log(this.clientes)
      })
    },
    reset() {
      // reseta o modo para 'save' e o usuário atual, carregando os clientes em seguida
      this.mode = 'save'
      this.cliente = {}
      this.loadClientes()
    },
    save() {
      /* 
        Usa a variável method para fazer a distinção entre os metodos POST e PUT a partir do id do usuário
        (se tem id é PUT, se não tem é POST).
        
        Se houver um ID, será utilizado para atribuir a variavel id o restante da url PUT.
        
        A variável method usada dentro de [ ] - cahamada de um metodo a partir de uma string - determina tbm qual será o tipo de função axios que será utilizada para fazer a requisição, passando como parametro a url eo o cliente em questao.
        
        Se a requisição for bem sucedida, irá aparecer um toasted de sucesso na tela, e em seguida o metodo reset é chamado, renderizando a nova lista de usuários, se não retorna um toasted com a mensagem de erro tratada.
      */
      const method = this.cliente.id ? 'put' : 'post'
      const id = this.cliente.id ? `/${ this.cliente.id }` : ''
      axios[method](`${baseApiUrl}/clientes${id}`, this.cliente)
        .then(() => { 
          this.$toasted.global.defaultSucess()
          this.reset()
        })
        .catch(showError)
    },
    remove() {
      // é uma função mais simples que o save(), que faz uma requisição axios do tipo delete passando a url com o id
      const id = this.cliente.id
      axios.delete(`${baseApiUrl}/clientes${id}`)
        .then(() => {
          this.$toasted.global.defaultSucess()
          this.reset()
        })
        .catch(showError)
    }
  },
  mounted() {
    // executado após o carregamento do componente
    this.loadClientes()
  }
}
</script>

<style lang="scss">
.slide-1 {
  background-image: url('../../../public/images/hero_1.jpg'); 
  background-repeat: no-repeat; 
  background-attachment: fixed;
}

.data-table{
  margin-bottom: 20vh;
  background-color: white;

}
</style>
