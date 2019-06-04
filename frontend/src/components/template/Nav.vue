<template lang="pug">
  nav(class="site-navbar js-sticky-header site-navbar-target" role="banner")
    div(class="header_container")
      div(class="container")
        div(class="header_content d-flex flex-row align-items-center justify-content-start")
      
          div(class="logo")
            router-link(to="/vitrine") Loljinha;)

          nav(class="main_nav" role="navigation")
            ul
              li(class="hassubs active")
                router-link(to="/vitrine" class="nav-link") Vitrine 
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
                router-link(to="/usuarios") Usuários
              li
                router-link(to="/categorias", class="nav-link") Categoria
              li
                router-link(to="/produtos", class="nav-link") Produto

          div(class="header_extra ml-auto")
            div(class="shopping_cart")
              router-link(to="/carrinho")
                svg(x="0px" y="0px" viewBox="0 0 489 489" style="enable-background:new 0 0 489 489;" xml:space="preserve")
                  g
                    path(d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z")

                div Carrinho 
                  span (0)

      div(class="header_social user-dropdown")
        p 
        router-link(to="/auth" title="Login" class="fa fa-sign-in fa-lg" aria-hidden="true" alt="Login")


</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Menu",
  computed: mapState(["isMenuVisible"]),
  data() {
    return {
      generic: 'Login / Cadastro ',
      welcome: 'Olá, ',
      user: {}
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
.user-dropdown { display: flex;  
  // a { margin: 7px 0px 0px 10px;   }
}

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

.shopping_cart { width: 150px;}

.main_nav, .header_social, .header_extra { margin-top: 10px; }
</style>
