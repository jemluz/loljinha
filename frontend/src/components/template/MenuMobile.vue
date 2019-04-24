<template lang="pug">
  div(class="site-mobile-menu site-navbar-target")
    div(class="site-mobile-menu-header")
      div(class="site-mobile-menu-close mt-3")
        span(class="icon-close2 js-menu-toggle")

    div(class="site-mobile-menu-body")

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
header {
}
</style>
