import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/pages/Home/Home'
import Audio from '@/components/pages/Audio/Audio'
import Broadcast from '@/components/pages/Broadcast/Broadcast'
import Group from '@/components/pages/Group/Group'
import Mine from '@/components/pages/Mine/Mine'
import Nofound from '@/components/pages/Nofound/Nofound'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/audio',
      name: 'audio',
      component: Audio
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'group',
      component: Group
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '*',
      component: Nofound
    },
  ]
})
