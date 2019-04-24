<template lang="pug">
  div(id="app" :class="{'hide-menu': !isVisible}")
    <!-- se o menu != visivel, a classe .hide-menu é aplicada -->
    MenuMobile(:hideToggle="false")
    Nav
    Content
    Footer
  </div>
</template>

<script>
import { mapState } from "vuex";
import MenuMobile from "@/components/template/MenuMobile";
import Nav from "@/components/template/Nav";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";

export default {
  name: "App",
  components: { MenuMobile, Nav, Content, Footer },
  computed: mapState(["isVisible"])
};
</script>


<style lang="scss">
</style>
