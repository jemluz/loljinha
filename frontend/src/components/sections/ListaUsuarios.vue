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
        th.pd-top Ações
      tr(v-for="cliente in clientes", class='data-tr')
        th.pd-left {{ cliente.nome }}
        th.pd-left {{ cliente.login }}
        th.pd-left.pd-right {{ cliente.senha }}
        th.pd-top.pd-right   
          button(
            @click='loadCliente(cliente, "save", true)'
            class='mr-2 bt-edit'
          ) #[i(class='fa fa-pencil fa-lg')]
          button(
            @click="loadCliente(cliente, 'remove', false)" 
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
        loadCliente(cliente, mode = 'save', edit = 'true') {
            this.mode = mode
            this.edit = edit
            this.cliente = { ...cliente }
            console.log(this.mode + ' ' + this.edit)
        },
        loadClientes() {
        // utiliza uma url pra fazer uma requisição com o axios e carregar um array de clientes
            const url = `${baseApiUrl}/clientes`
            axios.get(url).then(resposta => {
                this.clientes = resposta.data
                console.log(this.clientes, this.edit)
            })
        },
        remove() {
        // é uma função mais simples que o save(), que faz uma requisição axios do tipo delete passando a url com o id
        const login = this.cliente.login
        axios.delete(`${baseApiUrl}/clientes/${login}`)
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

<style>

</style>
