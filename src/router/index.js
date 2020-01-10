import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from  '@/layout/default.vue';
import blankPage  from  '@/layout/blank.vue';
import Index from '@/page/index.vue';
import goodsList from '@/page/goodsList.vue'
import navList from '@/page/navList.vue'
import changeCity from '@/page/changeCity.vue'
import Login from '@/page/login.vue';
import register from '@/page/register.vue'

Vue.use(Router)

export default new Router({
  mode:'history',  //每次会刷新页面
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,   
      redirect: '/index',
      children:[{
        path:'s/:name',
        name:'goods',
        component: goodsList
      },{
        path: '/index', 
        name: 'index',
        component: Index,           
      },{
        path:'/:name',
        name:'list',
        component: navList
      },{
        path:'/changeCity',
        name:'changeCity',
        component: changeCity
      }]
    },{
      path: '/blank',
      name: 'blankPage',  
      component: blankPage,
      children:[{
        path:'login',
        name:'login',
        component:Login
      },{
        path:'register',
        name:'register',
        component:register

      }]
    },
  ]
})
