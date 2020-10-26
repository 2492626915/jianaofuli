import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Answer from '../views/answer'
import AnswerCorrect from '../views/AnswerCorrect'
import LuckDraw from '../views/luckdraw'
import GongXi from '../views/gongXi'
import JiaYouQuan from '../views/jiaYouQuan'
import Regret from '../views/regret'
import PlayAndBuy from '../views/playAndBuy'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'/',
      component: Answer

    },{
      path:'/AnswerCorrect',
      name:'AnswerCorrect',
      component:AnswerCorrect
    },
    {
      path:'/luckdraw',
      name:'luckdraw',
      component:LuckDraw
    },
    {
      path:'/gongxi',
      name:'gongxi',
      component:GongXi
    },
    {
      path:'/jiayouquan',
      name:'jiayouquan',
      component:JiaYouQuan
    },
    {
      path:'/regret',
      name:'regret',
      component:Regret
    },
    {
      path:'/playandbuy',
      name:'playandbuy',
      component:PlayAndBuy
    }
  ]
})
