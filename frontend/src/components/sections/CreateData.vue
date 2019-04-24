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
                  action="" 
                  method="post" 
                  class="form-box"
                )
                  h3(class="h4 text-black mb-4") Cadastrar Cliente

                  div.form-group
                    input(
                      type="text" 
                      class="form-control" 
                      placeholder="Seu nome aqui :)"
                    )

                  div.form-group
                    input(
                      type="password" 
                      class="form-control" 
                      placeholder="...e o login!"
                    )

                  div.form-group
                    input(
                      type="password" 
                      class="form-control" 
                      placeholder="Ah! Tem a senha também."
                    )

                  div.form-group
                    input(
                      type="password" 
                      class="form-control" 
                      placeholder="Pode repetir a senha?"
                    )

                  div.form-group
                    input(
                      type="submit" 
                      class="btn btn-primary btn-pill" 
                      value="Criar cadastro"
                    )
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'
// o axios é responsável por enviar requisições da view

export default {
  name: 'CreateData',
  data: function() {
    return {
      mode: 'save', 
      cliente: {},
      clientes: []
    }
  },
  methods: {
    loadClientes() {
      const url = `${baseApiUrl}/clientes`
      axios.get(url).then(resposta => {
        this.clientes = resposta.data
        console.log(this.clientes)
      })
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
</style>
