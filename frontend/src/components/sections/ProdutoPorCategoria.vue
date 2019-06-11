<template lang='pug'>
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
            categorias: [],
            itemsNumber: 4
        }
    },
    methods: {
        loadProdutos() {
            // utiliza uma url pra fazer uma requisição com o axios e carregar um array de clientes
            axios.get(`${baseApiUrl}/produto`).then(resposta => {
                this.produtos = resposta.data 
            })
        },
        verCategoria() {
            const getCategoria = `${baseApiUrl}/produtos`
            this.$store.commit('setUrl', )
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
