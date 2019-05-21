<template lang='pug'>
  div.intro-section#create-section
    div.slide-1 
      div.container
        div(class="row align-items-center")
          div.col-12
            div(class="row align-items-center")

              div(
                class="col-lg-5 ml-auto"               
                data-aos="fade-up" 
                data-aos-delay="500"
              )

                form(
                  class="form-box"
                )
                  h3(class="h4 text-black mb-4") Fazer Login

                  div.form-group
                    input(
                      type="text" 
                      class="form-control" 
                      placeholder="Seu nome aqui :)"
                      v-model='cliente.login'
                      required
                    )

                  div.form-group
                    input(
                      type="password" 
                      class="form-control" 
                      placeholder="Ah! Tem a senha também."
                      v-model='cliente.senha'
                      required
                    )

                  div.form-group
                    input(
                      type='button'
                      class="btn btn-primary btn-pill" 
                      @click="login"
                      value="Entrar"
                    )
   
                    input(
                      type='button'
                      class="btn btn-dark danger ml-3 btn-pill" 
                      @click="reset"
                      value="limpar"        
                      data-aos="fade-left" 
                    )

</template>

<script>
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'
// o axios é responsável por enviar requisições da view

export default {
  name: 'LoginPage',
  data: function() {
    return {
      cliente: {}
    }
  },
  methods: {
    reset() {
      // reseta o modo para 'save' e o usuário atual, carregando os clientes em seguida
      this.cliente = {}
    },
    login() {
      console.log(this.cliente)
      axios.post(`${baseApiUrl}/login`, this.cliente)
        .then(() => { 
          this.$toasted.global.defaultSucess()
          this.reset()
        })
        .catch(showError)
    }
  },
  mounted() {
    // executado após o carregamento do componente
  }
}
</script>

<style lang="scss">
.slide-1 {
  // background-image: url('../../../public/images/hero_1.jpg'); 
  background-repeat: no-repeat; 
  background-attachment: fixed;
}

.data-table{
  width: 100%;
  margin-bottom: 20vh;
  background-color: white;
}

.top {
  background-color: #7971ea;
  box-shadow: 10px 0px 5px rgba(0, 0, 0, 0.1);
  color: #fff;
}

.pd-top { padding: 20px 40px; }
.pd-left { padding-left:  40px; }
.pd-right { padding-right:  40px; }

.data-tr { 
  color: black; 
  font-size: 18px;
  opacity: .6;
}

.bt-edit,
.bt-remove {
  background: none;
  border: none;
  color:  #7971ea;
}

.bt-remove {
  color:  #eb1c0f;
}
</style>
