<template lang="pug">
  nav(class="menu-nav" v-show="isMenuVisible")
    router-link(to="/", class="home-a" @click="toggleLines") Home
    router-link(to="/quem-somos", class="qm-a" @click="toggleLines()") Quem Somos
    router-link(to="/portfolio", class="port-a") Portfolio
    router-link(to="/blog", class="blog-a") Blog
    router-link(to="/contato", class="contato-a") Contato

    svg(height="2" id='h1' v-if="!isHome")
      line(x1="180" transform="translate(1 1)" fill="none" stroke="#FE6A6A" stroke-linecap="round" stroke-width="2")
    svg(height="2" id='h2' v-if="isHome")
      line(x1="30%" transform="translate(1 1)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2" opacity="0.6")
    
    svg(height="2" id='q1' v-show="!isQuem")
      line(x1="120" transform="translate(1 1)" fill="none" stroke="#FE6A6A" stroke-linecap="round" stroke-width="2")
    svg(height="2" id='q2' v-show="isQuem")
      line(x1="30%" transform="translate(1 1)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2" opacity="0.6")
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Menu",
  computed: mapState(['isMenuVisible']),
  data() {
    return {
      isHome: true,
      isQuem: false
    }
  },
  methods: {
    toggleLineHome (e) {
      // this.isHome = !this.isHome
      // console.log('isHome = ' + this.isHome)
      // console.log('isQuem = ' + this.isQuem)
      console.log(e)
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/variables";

nav {
  display: grid;
  z-index: 99;

  a{
    text-align: right;
    opacity: .6;
    color: $pr;
    // font-weight: 600;

  }/* ESTILO GERAL DOS LINKS*/
  
  @media only screen and (max-width: 900px) {
    grid-template-rows: 40% 10% 10% 10% 10% 10% 10%;
    grid-template-columns: 25% 50% 25%;
    background-color: rgba(0, 0, 0, 0.0);
    align-items: center;
    justify-content: center;
    height: 100vh;
    z-index: -1;

    a{
      grid-column: 2;
      -webkit-tap-highlight-color: transparent;
      transition: opacity 1s ease;
      font-size: 20px;
      margin-left: 20px; 
      &.router-link-exact-active {
        color: $verm;
        font-weight: 600;
        opacity: 1;
      }
    }    

    #h1, #h2 { grid-row: 2;}
    #q1, #q2 { grid-row: 3;}
    #p1, #p2 { grid-row: 4;}
    #b1, #b2 { grid-row: 5;}
    #c1, #c2 { grid-row: 6;}

    #h2, #q2, #p2, #b2, #c2 { margin-left: 50px; grid-column: 3 / 4; }


    .home-a {grid-row: 2;}
    .qm-a {grid-row: 3;}
    .port-a {grid-row: 4;}
    .blog-a {grid-row: 5;}
    .contato-a {grid-row: 6;}
  }/* MOBILE */

  // @media only screen and (min-width: 901px) {
  //   a{
  //     font-size: 14px;
  //     color: $branco;
  //     transition: opacity 1s ease;
  //     &:hover {
  //       opacity: 1;
  //     }
  //     &:before {
        
  //     }
  //   }

  //   .inicio-a {grid-column: 2;}
  //   .qm-a {grid-column: 3;}
  //   .atms-a {grid-column: 4;}
  //   .contato-a {grid-column: 5;}
  // }/* POSICIONAMENTO E ESTILO GENÉRICO */

  // @media only screen and (min-width: 900px) {
  //   grid-template-columns: 45% 8% 12% 13% 8% 10%;
  //   grid-template-rows: 100%;
  //   align-items: center;
  //   position: fixed;
  //   width: 100vw;
  //   z-index: 900;
  //   a{
  //     // padding: 5px 10px;
  //     margin: 20px 0px 10px 0px;
  //   }
  // }/* DESKTOP */

  // @media only screen and (min-width: 1200px) {
  //   grid-template-columns: 45% 8% 12% 13% 8% 10%;
  //   grid-template-rows: 100%;
  //   align-items: center;
  //   height: auto;
  //   z-index: 1000;

  //   a{
  //     font-size: 14px;
  //     -webkit-tap-highlight-color: rgba(238, 53, 55, 0);
  //     color: $branco;
  //     // padding: 20px 0px 10px;
  //   }

  //   .inicio-a {grid-column: 2;}
  //   .qm-a {grid-column: 3;}
  //   .atms-a {grid-column: 4;}
  //   .contato-a {grid-column: 5;}
  // }/* DESKTOP */
  
}
</style>
