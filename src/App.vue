<template>
  <top-header />

  <router-view></router-view>
  
  <bottom-footer />
</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'
export default {
  name:'app',
  components:{
    'top-header':header,
    'bottom-footer':footer,
  }
}
</script>

<style>

</style>