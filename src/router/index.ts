import { createRouter, createWebHistory,createWebHashHistory ,type RouteRecordRaw, type RouterHistory } from 'vue-router'
import {creatLoad} from '@/components/encapsulation/load/load';
import path from 'path';
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
const  routes:Array<RouteRecordRaw>= [
  {
    path: '/',
    name: 'home',
    meta:{
      title:"home"
    },
    component: () => import('../views/home.vue'),
    children:  [{
      path: 'translate',
      name: 'translate',
      meta:{
        title:"personal"
      },
      component: () => import('../views/translateview.vue')

    },
    {
      path: 'tech',
      name: 'tech',
      meta:{
        title:"findTechnology"
      },
   
      children:[{
        path:'blog:i',
        name:'blog',
        meta:{
          title:"文章"
        },
        component:()=>import('../views/blog.vue')
        
    },],
      component: () => import('../views/techview.vue'),
 
    },
    {
      path: 'Learn',
      name: 'Learn',
      meta:{
        title:"learn-more"
      },
      component: () => import('../views/Learnview.vue')

    },
    {
      path: 'collection',
      name: 'collection',
      meta:{
        title:"website"
      },
      component: () => import('../views/collectionview.vue')

    },
    {
      path: 'animation',
      name: 'animation',
      meta:{
        title:"Experiments"
      },
      component: () => import('../views/animationview.vue'),
      children:[{
        path:'',
        component:()=>import('../views/animationview/animationNav.vue')
      },   
       
    ]
    },
    {
      path: 'Technology_stack',
      name: 'Technology_stack',
      meta:{
        title:"技术栈"
      },
      component: () => import('../views/Technology_stack.vue')

    },

  
   
  ]
}]

  const router = createRouter({  
    history: createWebHashHistory(),  
    routes
})
for (let i = 1; i<= 7; i++) {
  router.addRoute('animation', { path: `/animation/00${i}`,name:`00${i}`,meta:{
    title:`00${i}`
  },  component: import(`../views/animationview/00${i}/00${i}.vue`) })
}

export default router
