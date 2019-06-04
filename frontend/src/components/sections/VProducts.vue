<template lang='pug'>
    div.products
        div.container
            div.row
                div.col
                    div.product_grid

                        <!-- Product -->
                        div(
                            class="product"
                            v-for='produto in produtos'
                            )
                            div.product_image
                                img(src="images/product_1.jpg")

                            div(class="product_extra product_sale" v-for='categoria in categorias')
                                a(href="categories.html" v-if='categoria.id === produto.categoriaId ')  {{ categoria.descricao }}

                            div.product_content
                                div.product_title 
                                    a(href="product.html") {{ produto.descricao }}

                                div.product_price R$ {{ produto.preco }}

</template>

<script>
import { baseApiUrl, showError, userKey } from '@/global'
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
                console.log(this.categorias)
            })
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
.products {
    height: 500px;}

.product_grid { display: flex; justify-content: space-between;}

</style>
