<template>
  <div id="app">
    <nav-bar></nav-bar>

    <img src="./assets/images/切图/规则/002.png" alt="" id="bag">
    <home></home>
  </div>
</template>

<script>
  import Home from  './views/home/Home'
  import NavBar from './components/navBar'
export default {
  name: 'App',
  components:{
    Home,
    NavBar
  }
}
</script>

<style>
  @import "./assets/css/reset.css";
  #app{
    max-height: 99999px;
  }
  #bag{
    width: 750px;
    position: fixed;
    z-index: -2;
  }
</style>
