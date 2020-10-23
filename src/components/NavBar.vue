<template>
    <div id="nav">
      <div class="navItems" id="navItems" @click="navItem">
        <img src="../assets/images/车主营销平台切5.png" alt="">
      </div>
      <div class="navItems">锦鲤活动</div>
      <div class="navItems"></div>
    </div>
</template>

<script>
    export default {
        name: "nav-bar",
      methods:{
        navItem(){
          this.$router.back()
        }
      }
    }
</script>

<style scoped>
  #nav{
    display: flex;
    background: #333238;
    color:#fff;
  }
  #nav .navItems{
    margin:0 auto;
    height:1rem;
    line-height: 1rem;
  }
  #nav #navItems img{
    transform:rotate(90deg);
  }
</style>
