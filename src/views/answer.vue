<template>
    <div id="choice" >
      <div :class="{Wrong:classBoo}">
        <img src="../assets/images/切图/答题/index.png" alt="" id="background">
        <div id="quesiton">
          由省交警总队，建行陕西分行共同研发的交通安全信息卡有什么作用和权益(多选)：
        </div>
        <div class="choiceQuestion"  @click="choiceClick(0)">
         <div class="serial">
           <img src="../assets/images/切图/答题/1_03.png" alt="" v-if="!flag[0]" >
           <img src="../assets/images/切图/答题/微信图片_20190312094508.png" alt="" v-else>
           <span >A:</span>
         </div>
          <div class="words"> 机动车交通违法记录在线处理，包含裁决与缴纳罚款</div>
        </div>
        <div class="choiceQuestion" @click="choiceClick(1)">
          <div class="serial">
            <img src="../assets/images/切图/答题/1_03.png" alt="" v-if="!flag[1]"  >
            <img src="../assets/images/切图/答题/微信图片_20190312094508.png" alt="" v-else >
            <span>B:</span>
          </div>
         <div class="words"> 全国高速ETC通行省内95折</div>
        </div>
        <div class="choiceQuestion"  @click="choiceClick(2)">
          <div class="serial">
            <img src="../assets/images/切图/答题/1_03.png" alt="" v-if="!flag[2]"  >
            <img src="../assets/images/切图/答题/微信图片_20190312094508.png" alt="" v-else>
            <span> C:</span>
          </div>
          <div class="words">
          具有信用卡的刷卡消费功能，终身免收年费
        </div>
        </div>
        <div class="choiceQuestion"  @click="choiceClick(3)">
          <div class="serial">
            <img src="../assets/images/切图/答题/1_03.png" alt="" v-if="!flag[3]" >
            <img src="../assets/images/切图/答题/微信图片_20190312094508.png" alt="" v-else>
            <span>
             D:
          </span>
          </div>
           <div class="words">
          多使用交安卡，在优驾行【车主权益】-【交安卡专享】享受车主福利
        </div>
        </div>
        <div class="choiceQuestion"  @click="choiceClick(4)">
          <div class="serial">
            <img src="../assets/images/切图/答题/1_03.png" alt="" v-if="!flag[4]" >
            <img src="../assets/images/切图/答题/微信图片_20190312094508.png" alt="" v-else>
            <span>
             E:
          </span>
          </div>
           <div class="words">
          交安卡可作为绑定微信和支付宝首选卡，下期锦鲤活动权益多多
        </div>
        </div>
        <div id="Submit" @click="submitChioce">
          <img src="../assets/images/切图/答题/1_07.png" alt="" >
        </div>
      </div>
      <div id="answerIncorrectly" :class="{closeWrong:!classBoo}">
        <img src="../assets/images/切图/答错/微信图片_20190312094516.png" alt="" >
        <img src="../assets/images/切图/答错/2_03 (2).png" alt="" id="determine" @click="Wrong">
        <div>
          <img src="../assets/images/切图/答错/2_07.png" alt="" id="close" @click="Wrong">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "answer",
      data(){
          return {
            flag:[false,false,false,false,false],
            classBoo:false,
            path:"/AnswerCorrect"
          }
      },
      methods:{
        choiceClick(position){
          console.log(this.flag[position]);
          this.flag.splice(position,1,!this.flag[position])
        },
        submitChioce(){
          if(this.flag[0] == true&&this.flag[1] == true&&this.flag[2] == true&&this.flag[3] == true&&this.flag[4] == true){
            this.$router.push({name:'AnswerCorrect'})
          }else{
            this.classBoo = true
          }
        },
        Wrong(){
          this.classBoo = false
        }
      }
    }
</script>

<style scoped>
  /*#bag{*/
    /*width: 750px;*/
  /*}*/
  #choice{
  }
  #background{
    width: 750px;
  }

  #Submit{
    text-align: center;
  }
  #Submit img{
    width: 180px;
    height: 60px;
  }
  #quesiton{
    width: 618px;
    margin: 0 auto;
    margin-top: 10px;
    font-size: 30px;
    font-weight: bold;
    color: #593c04;

  }
  .choiceQuestion{
    width: 618px;
    margin: 30px auto;
    font-size: 30px;
    color: #573a02;
    overflow: hidden;
  }
  .serial{
    font-size: 32px;
    font-weight: bold;
    float: left;
    margin-top: 5px;
  }
  .words{
    width: 540px;
    float: right;
  }
  #answerIncorrectly{
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 20%;
    margin: auto;
  }
  #determine{
    position: absolute;
    left: 41%;
    top: 70%;
  }
  #close{
    position: absolute;
    top:110%;
    left: 44%;
  }
  .Wrong{
    opacity: 0.3;
  }
  .closeWrong{
    display: none;
  }
</style>
