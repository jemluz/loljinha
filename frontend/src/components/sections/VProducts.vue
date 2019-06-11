<template lang='pug'>
    div.container
        div.row
            div.col
                div.product_grid

                    <!-- Product -->
                    div(
                        class="product"
                        v-for='(produto, index) in produtos'
                        )
                        div.product_image
                            router-link(to='/produto-detalhe')    
                                img(src="images/product_1.jpg"  @click='func(index)')

                        div(class="product_extra product_sale" v-for='categoria in categorias')
                            a(href="categories.html" v-if='categoria.id === produto.categoriaId ')  {{ categoria.descricao }}
                            a(v-else) não tem nada aqui

                        div.product_content
                            div.product_title 
                                a(href="product.html") {{ produto.descricao }}

                            div.product_price R$ {{ produto.preco }}

</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {
    name: 'VProducts',
    data: function() {
        return { 
            produtos: [],
            categorias: []
        }
    },
    methods: {
        loadProdutos() {
            // utiliza uma url pra fazer uma requisição com o axios e carregar um array de clientes
            axios.get(`${baseApiUrl}/produtos`).then(resposta => {
                this.produtos = resposta.data   
            })
        },
        loadCategorias() {
            // utiliza uma url pra fazer uma requisição com o axios e carregar um array de clientes
            axios.get(`${baseApiUrl}/categorias`).then(resposta => {
                this.categorias = resposta.data
            })
        },
        func(index) {
            this.$store.commit('setProdutoId', this.produtos[index].id)
        }
    },
    mounted() {
        // executado após o carregamento do componente
        this.loadCategorias()
        this.loadProdutos()
    }
}
</script>

<style lang='scss'>
.product_grid { display: flex; margin-top: 100px; height: initial; flex-direction: row; justify-content: space-between; flex-wrap: wrap;  }
.product { margin-bottom: 20px; }  
</style>
