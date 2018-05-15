import Vue from 'vue'
import Router from 'vue-router'
// import HomeContainer from '../components/HelloWorld.vue'
import HomeContainer from '../containers/home/HomeContainer.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeContainer
    }
  ]
})
