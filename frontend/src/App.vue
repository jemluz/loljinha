<template lang="pug">
  div(:class="{'hide-painel': !isFuncionario || !user}")
    Nav
    Content(@add-to-cart="updateCart")
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
  computed: mapState(['isFuncionario', 'user']),
  methods: {

  }
};
</script>


<style lang="scss">
a:hover { text-decoration: none !important; }
</style>
