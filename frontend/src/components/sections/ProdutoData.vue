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
                  ) Produtos Incríveis

                p(
                  class="mb-4" 
                  data-aos="fade-up" 
                  data-aos-delay="200"
                  )  Aqui na loljinha nossos produtos possuem id, nome, preço e estão associados com categorias. #[br] Experimente criar um no cadastro!

              div(
                class="col-lg-5 ml-auto"               
                data-aos="fade-up" 
                data-aos-delay="500"
              )

                form(
                  class="form-box"
                )
                  h3(class="h4 text-black mb-4") Cadastrar Produto

                  div.form-group
                    input(
                      type="text" 
                      name='descricao'
                      class="form-control" 
                      placeholder="Qual é o produto?"
                      v-model='produto.descricao'
                      :readonly='mode === "remove"'
                      required
                    )

                  div.form-group
                    input(
                      type="text" 
                      name='preco'
                      class="form-control" 
                      placeholder="...e o preço?"
                      v-model='produto.preco'
                      :readonly='mode === "remove"'
                      required
                    )

                  div.form-group
                    label Ah! Tem a categoria também!
                    select( 
                      class="form-control"  
                      name='categoria'
                      v-model='produto.categoriaId' 
                      :readonly='mode === "remove"' 
                      required
                    )
                      option(v-for='categoria in categorias' :value="categoria.id") {{ categoria.id }} / {{ categoria.descricao }}

                  div.form-group                  
                    label(for="exampleFormControlFile1") Mande fotos do seu produto, vai ficar melhor!
                    input(type="file" name='imagem' class="form-control-file mb-3" @change="onFileChange" id="exampleFormControlFile1" ref="fotoPath")

                  div.form-group  
                    input(
                      type='button'
                      class="btn btn-primary btn-pill" 
                      v-if="mode === 'save'"
                      @click="save"
                      value="Salvar cadastro"
                    )
                    input(
                      type='button'
                      class="btn btn-danger btn-pill" 
                      v-if="mode === 'remove'"
                      @click="remove"
                      value="Excluir cadastro"
                    )              
                    input(
                      type='button'
                      class="btn btn-dark danger ml-3 btn-pill" 
                      @click="reset"
                      value="limpar"        
                      data-aos="fade-left" 
                    )

    img(:src="img")

    table(
      class='data-table col-lg-12 form-box'
      data-aos="fade-down" 
      data-aos-delay="0"
    )
      tr.top
        th.pd-top Id
        th.pd-top Nome
        th.pd-top Preço
        th.pd-top Id Categoria
        th.pd-top Ações
      tr(v-for="produto in produtos", class='data-tr')
        th.pd-left {{ produto.id }}
        th.pd-left {{ produto.descricao }}
        th.pd-left.pd-right R$ {{ produto.preco }}
        th.pd-left.pd-right {{ produto.categoriaId }}
        th.pd-top.pd-right   
          button(
            @click='loadProduto(produto, "save", true)'
            class='mr-2 bt-edit'
          ) #[i(class='fa fa-pencil fa-lg')]
          button(
            @click="loadProduto(produto, 'remove', false)" 
            class='mr-2 bt-remove'
          ) #[i(class='fa fa-trash fa-lg')]

</template>

<script>
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'
// o axios é responsável por enviar requisições da view

export default {
  name: 'ProdutoData',
  data: function() {
    return {
      mode: 'save', 
      produto: { },
      produtos: [],
      categorias: [],
      selectedImage: null,
      edit: false,
      img: ''
    }
  },
  methods: {
    loadProduto(produto, mode = 'save', edit = 'true') {
      this.mode = mode
      this.edit = edit
      this.produto = { ...produto }
      console.log(this.mode + ' ' + this.edit)
    },
    loadProdutos() {
      // utiliza uma url pra fazer uma requisição com o axios e carregar um array de clientes
      const url = `${baseApiUrl}/produtos`
      axios.get(url).then(resposta => {
        this.produtos = resposta.data
      })
    },
    loadCategorias() {
      // utiliza uma url pra fazer uma requisição com o axios e carregar um array de clientes
      axios.get(`${baseApiUrl}/categorias`).then(resposta => {
        this.categorias = resposta.data
      })
    },
    reset() {
      // reseta o modo para 'save' e o usuário atual, carregando os clientes em seguida
      this.mode = 'save'
      this.produto = {}
      this.edit = false
      this.loadProdutos()
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
      const method = this.produto.id ? 'put' : 'post'
      const id = this.produto.id ? `/${ this.produto.id }` : ''

      // const form = new FormData()

      // const files = this.$refs.fotoPath.files
      // console.log(files)
      // for (let i = 0; i < files.length; i++) {
      //   form.append(files[i].name, files[i])
      // }

      // form.append('descricao', this.produto.descricao)
      // form.append('preco', this.produto.preco)
      // form.append('categoria', this.produto.categoriaId)

      axios[method](`${baseApiUrl}/produtos${id}`, this.produto)
        .then(() => {this.$toasted.global.defaultSucess()
          this.reset()
          console.log(oi)
        })
        .catch(showError)
    },
    remove() {
      // é uma função mais simples que o save(), que faz uma requisição axios do tipo delete passando a url com o id
      const id = this.produto.id
      axios.delete(`${baseApiUrl}/produtos/${id}`)
        .then(() => {
          this.$toasted.global.defaultSucess()
          this.reset()
        })
        .catch(showError)
    },
    onFileChange(e) {
      var control = this
      var img = new Image()
      var files = []
      if(e.target.files){
        files = e.target.files
      }else if(e.dataTransfer.files){
        files = e.dataTransfer.files
      }
      if (!files.length)
        return;
        var reader = new FileReader()      
        reader.onloadend = function () {
          control.produto.fotoPath = reader.result
        }
        reader.readAsBinaryString(files[0])
        var preview = new FileReader()
        preview.onloadend = function () {
          control.img = preview.result
        }
        preview.readAsDataURL(files[0])
    }
  },
  mounted() {
    // executado após o carregamento do componente
    this.loadCategorias()
    this.loadProdutos()
  }
}
</script>

<style lang="scss">

option {text-transform: uppercase;}

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
