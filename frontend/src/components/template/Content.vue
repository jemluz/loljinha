<template lang="pug">
  .content
    <router-view></router-view>
    CreateData
</template>

<script>
import CreateData from "@/components/sections/CreateData";

export default {
  name: 'Content',
  components: { CreateData }
}
</script>

<style>

</style>
