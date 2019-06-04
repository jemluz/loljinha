<template lang='pug'>
    div
        //- VBanner
        VAds
        VProducts

</template>

<script>
import VBanner from './VBanner'
import VProducts from './VProducts'
import VAds from './VAds'

export default {
    name: 'Vitrine',
    components: { VBanner, VProducts, VAds }
}
</script>

<style lang='scss'>

</style>
