<template>
    <div>
      <img src="../assets/images/切图/答对/3-1答对_02.png" alt="" id="background">
      <img src="../assets/images/切图/答对/3-1答对_01_03.png" alt="" id="receivingBenefits" @click="receiving">
      <img src="../assets/images/切图/答对/3-1答对_01_06.png" alt="" id="register" @click="registers">

    </div>
</template>
<script>
    export default {
        name: "answer-correct",
      data(){
        return {
          path:'/luckdraw'
        }
      },
      methods:{
        receiving(){
          this.$router.push({name:'luckdraw'})
        },
        registers(){
          console.log(1);

        }
      }
    }
</script>

<style scoped>
  #background{
    width: 750px;
  }
  div{
    position: relative;
    height: 1250px;
  }
  img{
    position:absolute;
  }
 #receivingBenefits{
   z-index: 1;
   left: 26%;
   bottom: 40%;

 }
  #register{
    z-index: 1;
    left: 27%;
    bottom: 26%;
  }
</style>
