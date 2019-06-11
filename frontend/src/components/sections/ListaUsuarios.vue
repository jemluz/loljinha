<template lang='pug'>
    table(
      class='data-table col-lg-12 form-box'
      data-aos="fade-down" 
      data-aos-delay="0"
    )
      tr.top
        th.pd-top Nome
        th.pd-top Login
        th.pd-top Senha Codificada
        th.pd-top Tipo
        th.pd-top Salario
        th.pd-top Ações
      tr(v-for="user in users", class='data-tr')
        th.pd-left {{ user.nome }}
        th.pd-left {{ user.login }}
        th.pd-left.pd-right {{ user.senha }}
        th(
          class='pd-left.pd-right'
          v-if='user.isFuncionario === true'
          ) Funcionário
        th(
          class='pd-left.pd-right'
          v-if='user.isFuncionario === false'          
          ) Cliente
        th.pd-left.pd-right {{ user.salario }}
        th.pd-top.pd-right   
          button(
            @click='loadUser(user, "save", true)'
            class='mr-2 bt-edit'
          ) #[i(class='fa fa-pencil fa-lg')]
          button(
            @click="loadUser(user, 'remove', false)" 
            class='mr-2 bt-remove'
          ) #[i(class='fa fa-trash fa-lg')]
</template>

<script>
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'
// o axios é responsável por enviar requisições da view

export default {
    name: 'ListaUsuarios',
    data: function() {
        return {
            users: [],
            user: {}
        }
    },
    methods: {
        loadUser(user, mode = 'save', edit = 'true') {
            this.mode = mode
            this.edit = edit
            this.user = { ...user }
            console.log(this.mode + ' ' + this.edit)
        },
        loadUsers() {
        // utiliza uma url pra fazer uma requisição com o axios e carregar um array de clientes
            const url = `${baseApiUrl}/usuarios`
            axios.get(url).then(resposta => {
                this.users = resposta.data
                console.log(this.users, this.edit)
            })
        },
        remove() {
        // é uma função mais simples que o save(), que faz uma requisição axios do tipo delete passando a url com o id
        const login = this.user.login
        axios.delete(`${baseApiUrl}/usuarios/${login}`)
            .then(() => {
            this.$toasted.global.defaultSucess()
            this.reset()
            })
            .catch(showError)
        }
    },
    mounted() {
    // executado após o carregamento do componente
    this.loadUsers()
  }
}
</script>

<style>

</style>
