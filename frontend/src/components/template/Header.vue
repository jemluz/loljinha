<template lang="pug">
  header(class="site-navbar py-4 js-sticky-header site-navbar-target",role="banner")
    div.container-fluid
      div(class="d-flex align-items-center")
      div(class="site-logo mr-auto w-25")
        router-link(to="/home", class="port-a") Loljinha ;)

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
