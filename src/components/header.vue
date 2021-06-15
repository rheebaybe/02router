<template>
  <h1 class="logo">logo</h1>
  <ul class="menu clearfix">
      <!-- <li v-for="(a,i) in menu" :key="i">{{a}}</li>   -->
      <li><router-link to="/">home</router-link></li>
      <li><router-link to="/company">company</router-link></li>
      <li><router-link to="/product">product</router-link></li>
  </ul>
</template>

<script>
export default {
    name:'header',
    // name은 안넣어도 상관없다
    data(){
        return{
            menu:['home','company','product'],
        }
    }
}
</script>

<style>

</style>