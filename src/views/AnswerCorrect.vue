<template>
    <div >
     <div :class="{op:flag}">
       <img src="../assets/images/切图/答对/3-1答对_02.png" alt="" id="background">
       <img src="../assets/images/切图/答对/3-1答对_01_03.png" alt="" id="receivingBenefits" @click="receiving">
       <img src="../assets/images/切图/答对/3-1答对_01_06.png" alt="" id="register" @click="registers">
     </div>
      <div class="chiof" :class="{op:!flag}">
        <button class="chio" @click="noPlay">没有抽过奖</button>
        <button class="chio" @click="playAndBuy">抽中奖且已经购买</button>
        <button class="chio" @click="palyNoBuy">中奖还未购买</button>
      </div>
    </div>
</template>
<script>
    export default {
        name: "answer-correct",
      data(){
        return {
          path:'/luckdraw',
          flag:false
        }
      },
      methods:{
        receiving(){
          this.flag = !this.flag
        },
        registers(){
          console.log(1);

        },
        noPlay(){
          this.$router.push({name:'luckdraw'})

        },
        playAndBuy(){
          this.$router.push({name:'playandbuy'})
        },
        palyNoBuy(){
          this.$router.push({name:'gongxi'})

        }
      }
    }
</script>

<style scoped>
  #background{
    width: 750px;
    text-align: center;
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
   left: 203px;
   bottom: 480px;

 }
  #register{
    z-index: 1;
    left: 203px;
    bottom: 324px;
  }
  .chiof{
    width: 300px;
    box-sizing: border-box;
    margin: 0 auto;
    padding-top: 400px;
  }
  .chio{
    width: 300px;
    height: 100px;
    font-size: 30px;
    margin-top: 50px;
    border-radius:50px;
    background: #e45849;
    color: #fff;
  }
  .op{
    display: none;
  }
</style>
