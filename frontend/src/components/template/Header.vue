<template lang="pug">
  header
    p(class="toggle display-mob-only" @click="toggleMenu" v-if="!hideToggle" v-show="isCloseIcon") Nave 
    div(class="toggle bt-close display-mob-only" @click="toggleMenu" v-if="!hideToggle" v-show="!isCloseIcon")
      include ../../assets/close-menu.svg
    div(class="logo" v-show="!isCloseIcon")
      include ../../assets/logo.svg

</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  props: {
    hideToggle: Boolean
  },
  computed: mapState(["isCloseIcon"]),
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/variables";

header {
  width: 100vw;
  position: fixed;
  display: grid;
  z-index: 99;

  @media only screen and (max-width: 900px) {
    font-size: 14px;
    height: 40vh;
    z-index: 99;

    grid-template-columns: 33.33% 33.33% 33.33%;
    grid-template-rows: 40% 60%;
    p, .bt-close {
      grid-column: 3 / 4;
      grid-row: 1;
      justify-self: center;
      align-self: center;
    }
    .logo {
      grid-column: 2 / 3;
      grid-row: 2;
      justify-self: center;
      // align-self: center;
    }
    #logo-container {
      height: 14vh;
    }
  } // mobile

  @media only screen and (min-width: 901px) {
    font-size: 14px;
    height: 40vh;
    z-index: 2;
  } // desktop
}
</style>
