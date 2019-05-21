<template lang="pug">
  nav(class="site-navbar js-sticky-header site-navbar-target" role="banner")
    div(class="header_container")
      div(class="container")
        div(class="header_content d-flex flex-row align-items-center justify-content-start")
      
          div(class="logo mr-auto ")
            router-link(to="/") Loljinha;)

          nav(class="main_nav" role="navigation")
            ul
              li(class="hassubs active")
                router-link(to="index.html" class="nav-link") Produtos 
                ul
                  li
                    router-link(to="categories.html") Categories
                  li
                    router-link(to="product.html") Product
                  li
                    router-link(to="cart.html") Cart
                  li
                    router-link(to="checkout.html") Check out
                  li
                    router-link(to="contact.html") Contact

              li
                router-link(to="#") Usuários
              li
                router-link(to="contact.html") Sobre
              li
                router-link(to="/", class="nav-link") Clientes
              li
                router-link(to="/funcionarios", class="nav-link") Funcionário
              li
                router-link(to="/categorias", class="nav-link") Categoria
              li
                router-link(to="/produtos", class="nav-link") Produto

          div(class="header_extra ml-auto")
            div(class="shopping_cart")
              router-link(to="cart.html")
                div Carrinho 
                  span (0)

      div(class="header_social")
        ul
          li
            router-link(to="/login" title="Login" class="fa fa-sign-in fa-lg" aria-hidden="true" alt="Login")
          li
            router-link(to="/cadastro" class="fa fa-user-o fa-lg ml-3  mr-5" aria-hidden="true" title="Cadastro")

</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Menu",
  computed: mapState(["isMenuVisible"]),
  data() {
    return {
      isHome: true,
      isQuem: false
    };
  },
  methods: {
    toggleLineHome(e) {
      // this.isHome = !this.isHome
      // console.log('isHome = ' + this.isHome)
      // console.log('isQuem = ' + this.isQuem)
      console.log(e);
    }
  }
};
</script>

<style lang="scss">

.sticky-wrapper .site-navbar .site-menu > li > router-link {
  border-bottom: 4px solid #fff;
  transition: all 1s ease-in;
  &.router-link-exact-active {
    border-bottom: 4px solid #fff;
    position: relative;
  }
}

.site-navbar .site-navigation .site-menu { 
  border-bottom: 3px solid transparent;
  padding: 50px 20px;
  transition: all 1s ease-in;
  .router-link-exact-active {
    border-bottom: 3px solid #7971ea;
    display: inline-block;
    // padding: 5px 20px;
  }
}
</style>
