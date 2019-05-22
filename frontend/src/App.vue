<template lang="pug">
  div(:class="{'hide-painel': !isFuncionario || !user}")
    Nav
    Content
    Footer
  </div>
</template>

<script>
import { mapState } from "vuex";
import Nav from "@/components/template/Nav";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";

export default {
  name: "App",
  components: { Nav, Content, Footer },
  computed: mapState(['isFuncionario', 'user'])
};
</script>


<style lang="scss">
</style>
