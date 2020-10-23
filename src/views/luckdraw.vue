<template>
  <div id="bac">
    <img src="../assets/images/切图/抽奖/luck_draw_bg.png" alt="" id="background">
    <div id="items">
      <div>
        <img src="../assets/images/切图/抽奖/4_03.png" alt="" :class="{'xuanZhuan':flag1[0]}">
        <img src="../assets/images/切图/抽奖/4_03.png" alt="" :class="{'xuanZhuan':flag1[1]}">
        <img src="../assets/images/切图/抽奖/4_03.png" alt="" :class="{'xuanZhuan':flag1[2]}">

      </div>
      <div>
        <img src="../assets/images/切图/抽奖/4_03.png" alt="" :class="{'xuanZhuan':flag1[7]}">
        <img src="../assets/images/切图/抽奖/go_btn.png" alt="" @click="use && chouJiangDongHua()">
        <img src="../assets/images/切图/抽奖/4_03.png" alt="" :class="{'xuanZhuan':flag1[3]}">

      </div>
      <div>
        <img src="../assets/images/切图/抽奖/4_03.png" alt="" :class="{'xuanZhuan':flag1[6  ]}">
        <img src="../assets/images/切图/抽奖/4_03.png" alt="" :class="{'xuanZhuan':flag1[5]}">
        <img src="../assets/images/切图/抽奖/4_03.png" alt="" :class="{'xuanZhuan':flag1[4]}">

      </div>
    </div>

  </div>
</template>

<script>

    export default {
        name: "luckdraw",
      data(){
         return {
           arr:21,
           flag1:[false,false,false,false,false,false,false,false],
           jishi:'',
           index:'',
           use:true,
           zhiXingCiShu:0
         }
      },
      methods:{
        go_btn(){
          this.$router.replace("/gongxi") //点击切换路由
        },
        chouJiangDongHua(){
          this.use = false //点击事件开始执行，禁用点击事件

          this.zhiXingCiShu = 0
          this.index = 0//让index从零开始，杜绝动画与逻辑不匹配
          clearInterval(this.jishi ) //防止点击次数过多，打开多个定时器
            let suiji = Math.random()*10; //生成一个随机数
          console.log(suiji);
          this.jishi = setInterval(()=> {//定义一个定时器
            this.zhiXingCiShu++

          switch (true) {
            case suiji <= 3:
              if (this.zhiXingCiShu >= 49) { //当定时器执行到一定次数，停止执行
                clearInterval(this.jishi);
                this.zhiXingCiShu = 0
                this.use = true

              }
              ;
              break;

        case
          suiji > 3 && suiji <= 5
        :
          if (this.zhiXingCiShu >= 50) { //当定时器执行到一定次数，停止执行
            clearInterval(this.jishi);this.zhiXingCiShu = 0
            this.use = true
          }
          ;
          break;
        case
          suiji > 5 && suiji <= 7
        :
          if (this.zhiXingCiShu >= 51) { //当定时器执行到一定次数，停止执行
            clearInterval(this.jishi);this.zhiXingCiShu = 0
            this.use = true
          }
          ;
          break;
        case
          suiji > 7 && suiji <= 8
        :
          if (this.zhiXingCiShu >= 52) { //当定时器执行到一定次数，停止执行
            clearInterval(this.jishi);this.zhiXingCiShu = 0
            this.use = true
          }
          ;
          break;
        case
          suiji > 8 && suiji <= 9
        :
          if (this.zhiXingCiShu >= 53) { //当定时器执行到一定次数，停止执行
            clearInterval(this.jishi);this.zhiXingCiShu = 0
            this.use = true
          }
          ;
          break;
        case
          suiji > 9 && suiji <= 9.5
        :
          if (this.zhiXingCiShu >= 54) { //当定时器执行到一定次数，停止执行
            clearInterval(this.jishi);this.zhiXingCiShu = 0
            this.use = true
          }
          ;
          break;
        case
          suiji > 9.5 && suiji <= 9.8
        :
          if (this.zhiXingCiShu >= 55) { //当定时器执行到一定次数，停止执行
            clearInterval(this.jishi);this.zhiXingCiShu = 0
            alert('您中奖了')
            this.$router.push({name:'gongxi'})

          }
          ;
          break;
        case
          suiji > 9.8 && suiji <= 9.9
        :
          if (this.zhiXingCiShu >= 56) { //当定时器执行到一定次数，停止执行
            clearInterval(this.jishi);this.zhiXingCiShu = 0
            alert('恭喜您中奖了')
            this.$router.push({name:'gongxi'})
          }
          ;
          break;
        default:
          ''
        }

                if(this.index > 7){
                this.index = 0
                }
                this.flag1.forEach((item,index)=>{ //动态渲染页面。旋转抽奖效果
                  this.flag1.splice(index,1,false)
                })
                this.flag1.splice(this.index*1,1,true)
                this.index++

        },50)
        }
      },
      beforeDestroy() {
        clearInterval(this.jishi );
      }
    }
</script>
<style scoped>
  #bac{
    position:relative;
  }
  #background{
    width: 750px;
  }
#items{
  text-align: center;
  position: absolute;
  left: 100px;
  top: 510px;
}
  #items div img{
    width: 180px;
    height: 140px;
  }
  .xuanZhuan{
    opacity: 0.5;
  }
</style>
