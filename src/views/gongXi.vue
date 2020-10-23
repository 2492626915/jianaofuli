<template>
    <div>
      <img src="../assets/images/切图/抽中/is_100.png" alt="" id="zhongJiang">
      <img src="../assets/images/切图/抽中/buy_now.png" alt="" id="gouMai" @click="maiYou">
    </div>
</template>

<script>
    export default {
        name: "gong-xi",
      methods:{
        maiYou(){
          this.$router.push({name:'jiayouquan'})
        }

      }
    }
</script>

<style scoped>
  div{
    position: relative;
  }
  #zhongJiang{
    width: 750px;
    position: absolute;
    z-index: -1;
  }
  #gouMai{
    position: absolute;
    left: 270px;
    top: 750px;
  }
</style>
