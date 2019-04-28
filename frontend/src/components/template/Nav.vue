<template lang="pug">
  nav(class="site-navbar py-4 js-sticky-header site-navbar-target" role="banner")
    div(class="container-fluid")
      div(class="d-flex align-items-center")
        
        div(class="site-logo mr-auto w-25")
          router-link(to="/") Loljinha;)

        div(class="mx-auto text-center")
          nav(class="site-navigation position-relative text-right" role="navigation")
            ul(class="site-menu main-menu js-clone-nav mx-auto d-none d-lg-block  m-0 p-0")
              li 
                router-link(to="/", class="nav-link") Clientes
              li 
                router-link(to="/funcionarios", class="nav-link") Funcionário
              li 
                router-link(to="/categorias", class="nav-link") Categoria
              li 
                router-link(to="/produtos", class="nav-link") Produto
                
        div(class="ml-auto w-25")
          nav( class="site-navigation position-relative text-right" role="navigation")
            ul(class="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block m-0 p-0")
              li(class="cta")
                router-link(to="#home-section", class="nav-link")
                  span Ver Dados

          router-link(to="#", class="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right") 
            span(class="icon-menu h3")

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
