import Vue from 'vue'
import Router from 'vue-router'
import Demo1 from "@/pages/demo1"
import TestVuex from "@/pages/testVuex"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/testvuex'
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: Demo1
    },
    {
      path: '/testvuex',
      name: 'testvuex',
      component: TestVuex
    }
  ]
})
