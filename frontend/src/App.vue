<template>
  <div id="app" :class="{'hide-menu': !isVisible}">
    <!-- se o menu != visivel, a classe .hide-menu é aplicada -->
    <Header :hideToggle="false"></Header>
    <Nav/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/template/Header";
import Nav from "@/components/template/Nav";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";

export default {
  name: "App",
  components: { Header, Nav, Content, Footer },
  computed: mapState(["isVisible"])
};
</script>


<style lang="scss">
</style>
