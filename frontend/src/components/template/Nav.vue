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
</style>
