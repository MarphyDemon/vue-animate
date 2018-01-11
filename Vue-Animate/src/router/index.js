import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hello from '@/components/hello'
import animate from '@/components/animate'
import countup from '@/components/count-Animate'
import chartdemo from '@/views/chart-demo'
import countdemo from '@/views/countup-demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'hello',
      component: hello
    },
    {
      path: '/chartdemo',
      name: 'chartdemo',
      component: chartdemo
    },
    {
      path: '/countdemo',
      name: 'countdemo',
      component: countdemo
    },
  ]
})
