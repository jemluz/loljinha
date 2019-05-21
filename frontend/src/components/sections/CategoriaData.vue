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
                  ) Categorias Top!

                p(
                  class="mb-4" 
                  data-aos="fade-up" 
                  data-aos-delay="200"
                  ) Aqui na loljinha nossas categorias possuem um nome e são referênciadas tabem na sessão de produtos. #[br] Experimente criar uma no cadastro ao lado!

              div(
                class="col-lg-5 ml-auto"               
                data-aos="fade-up" 
                data-aos-delay="500"
              )

                form(
                  class="form-box"
                )
                  h3(class="h4 text-black mb-4") Cadastrar Categoria

                  div.form-group
                    input(
                      type="text" 
                      class="form-control" 
                      placeholder="Vai o nome da categoria aqui :)"
                      v-model='categoria.descricao'
                      :readonly='mode === "remove"'
                      required
                    )

                  div.form-group
                    input(
                      type='button'
                      class="btn btn-primary btn-pill" 
                      v-if="mode === 'save'"
                      @click="save"
                      value="Salvar categoria"
                    )
                    input(
                      type='button'
                      class="btn btn-danger btn-pill" 
                      v-if="mode === 'remove'"
                      @click="remove"
                      value="Excluir categoria"
                    )              
                    input(
                      type='button'
                      class="btn btn-dark danger ml-3 btn-pill" 
                      @click="reset"
                      value="limpar"        
                      data-aos="fade-left" 
                    )

    table(
      class='data-table col-lg-12 form-box'
      data-aos="fade-down" 
      data-aos-delay="0"
    )
      tr.top
        th.pd-top Id
        th.pd-top Nome
        th.pd-top Ações
      tr(v-for="categoria in categorias", class='data-tr')
        th.pd-left {{ categoria.id }}
        th.pd-left {{ categoria.descricao }}
        th.pd-top.pd-right   
          button(
            @click='loadCategoria(categoria, "save", true)'
            class='mr-2 bt-edit'
          ) #[i(class='fa fa-pencil fa-lg')]
          button(
            @click="loadCategoria(categoria, 'remove', false)" 
            class='mr-2 bt-remove'
          ) #[i(class='fa fa-trash fa-lg')]

</template>

<script>
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'
// o axios é responsável por enviar requisições da view

export default {
  name: 'CategoriaData',
  data: function() {
    return {
      mode: 'save', 
      categoria: {},
      categorias: [],
      edit: false
    }
  },
  methods: {
    loadCategoria(categoria, mode = 'save', edit = 'true') {
      this.mode = mode
      this.edit = edit
      this.categoria = { ...categoria }
      console.log(this.mode + ' ' + this.edit)
    },
    loadCategorias() {
      // utiliza uma url pra fazer uma requisição com o axios e carregar um array de clientes
      const url = `${baseApiUrl}/categorias`
      axios.get(url).then(resposta => {
        this.categorias = resposta.data
        console.log(this.categorias, this.edit)
      })
    },
    reset() {
      // reseta o modo para 'save' e o usuário atual, carregando os clientes em seguida
      this.mode = 'save'
      this.categoria = {}
      this.edit = false
      this.loadCategorias()
    },
    save() {
      /* 
        Usa a variável method para fazer a distinção entre os metodos POST e PUT a partir do id do usuário
        (se tem id é PUT, se não tem é POST).
        
        Se houver um ID, será utilizado para atribuir a variavel id o restante da url PUT.
        
        A variável method usada dentro de [ ] - cahamada de um metodo a partir de uma string - determina tbm qual será o tipo de função axios que será utilizada para fazer a requisição, passando como parametro a url eo o cliente em questao.
        
        Se a requisição for bem sucedida, irá aparecer um toasted de sucesso na tela, e em seguida o metodo reset é chamado, renderizando a nova lista de usuários, se não retorna um toasted com a mensagem de erro tratada.

        const method = 'post'
      if (this.edit) { 
        this.method = 'put'
      } else { 
        this.method = 'post'
      }
      console.log('é um ' + this.method + this.edit)

      */
      const method = this.categoria.id ? 'put' : 'post'
      const id = this.categoria.id ? `/${ this.categoria.id }` : ''
      console.log(method + id)
      console.log(this.categoria)
      axios[method](`${baseApiUrl}/categorias${id}`, this.categoria)
        .then(() => { 
          this.$toasted.global.defaultSucess()
          this.reset()
        })
        .catch(showError)
    },
    remove() {
      // é uma função mais simples que o save(), que faz uma requisição axios do tipo delete passando a url com o id
      const id = this.categoria.id
      axios.delete(`${baseApiUrl}/categorias/${id}`)
        .then(() => {
          this.$toasted.global.defaultSucess()
          this.reset()
        })
        .catch(showError)
    }
  },
  mounted() {
    // executado após o carregamento do componente
    this.loadCategorias()
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
