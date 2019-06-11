<template lang='pug'>
    div
        div.home
            div.home_container
                div(class="home_background" style="background-image:url(images/categories.jpg)")
                div.home_content_container
                    div.container
                        div.row
                            div.col
                                div.home_content
                                    div.home_titleSmart Phones
                                        span .
                                    div.home_text
                                        p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.

        div.product_details
            div.container
                div(class="row details_row")

                    <!-- Product Image -->
                    div.col-lg-6
                        div.details_image
                            div.details_image_large
                                img(src="images/details_1.jpg" alt="")
                                div(class="product_extra product_new" v-for='categoria in categorias')
                                    router-link(to="#" v-if='categoria.id === produto.categoriaId') {{ categoria.descricao }}

                            div(class="details_image_thumbnails d-flex flex-row align-items-start justify-content-between")
                                div(class="details_image_thumbnail active" data-image="images/details_1.jpg")
                                    img(src="images/details_1.jpg" alt="")
                                div(class="details_image_thumbnail" data-image="images/details_2.jpg")
                                    img(src="images/details_2.jpg" alt="")
                                div(class="details_image_thumbnail" data-image="images/details_3.jpg")
                                    img(src="images/details_3.jpg" alt="")
                                div(class="details_image_thumbnail" data-image="images/details_4.jpg")
                                    img(src="images/details_4.jpg" alt="")

                    <!-- Product Content -->
                    div.col-lg-6 
                        div.details_content 
                            div.details_name {{ produto.descricao }}
                            div.details_discount R$ {{ produto.preco }}
                            div.details_price R$ {{ produto.preco }}

                            <!-- In Stock -->
                            div.in_stock_container
                                div.availability Availability:
                                span In Stock

                            div.details_text
                                p Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.

                            <!-- Product Quantity -->
                            div.product_quantity_container
                                div(class="product_quantity clearfix")
                                    span Qty

                                    input(id="quantity_input" type="text" pattern="[0-9]*" value="1")
                                    
                                    div.quantity_buttons
                                        div(id="quantity_inc_button" class="quantity_inc quantity_control")
                                            i(class="fa fa-chevron-up" aria-hidden="true")

                                        div(id="quantity_dec_button" class="quantity_dec quantity_control")
                                            i(class="fa fa-chevron-down" aria-hidden="true")

                                div(class="button cart_button")
                                    router-link(to="#") Add to cart

                div(class="row description_row")
                    div.col
                        div.description_title_container
                            div.description_titleDescription
                            div.reviews_title
                                router-link(to="#") Reviews 
                                    span (1)

                        div.description_text
                            p Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.


        <!-- Products -->

        div.products
            div.container
                div.row
                    div(class="col text-center")
                        div.products_titleRelated Products

                div.row
                    div.col
                        div.product_grid

                            <!-- Product -->
                            div.product
                                div.product_image
                                    img(src="images/product_1.jpg" alt="")
                                div(class="product_extra product_new")
                                    router-link(to="categories.html") New
                                div.product_content
                                    div.product_title
                                        router-link(to="product.html") Smart Phone
                                    div.product_price $670

        <!-- Newsletter -->

        div.newsletter
            div.container
                div.row
                    div.col
                        div.newsletter_border
                    
                div.row
                    div(class="col-lg-8 offset-lg-2")
                        div(class="newsletter_content text-center")
                            div.newsletter_titleSubscribe to our newsletter 
                            div.newsletter_text
                                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros

                            div.newsletter_form_container
                                form(action="#" id="newsletter_form" class="newsletter_form")
                                    input(type="email" class="newsletter_input" required="required")
                                    button(class="newsletter_button trans_200")
                                        span Subscribe

</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {
    name: 'ProdutoDetalhes',
    data: function() {
        return {
            categorias: [],
            produto: {}
        }
    },
    methods: {
        loadProduto () {
            const id = `/${ this.$store.state.produtoId }`
            axios.get(`${baseApiUrl}/produtos${id}`).then(resposta => { this.produto = resposta.data } )
            console.log('oi')
        },
        loadCategorias() {
            // utiliza uma url pra fazer uma requisição com o axios e carregar um array de clientes
            axios.get(`${baseApiUrl}/categorias`).then(resposta => {
                this.categorias = resposta.data
                console.log('oaii')
            })
        }
    },
    mounted() {
        this.loadCategorias()
        this.loadProduto()
    }
}
</script>

<style>

</style>
