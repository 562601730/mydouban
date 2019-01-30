import Vue from 'vue'
import App from './App'
import router from './router'
//引入全局样式
import "./stylesheets/main.scss"
//引入rem
import "./modules/rem"
//引入axios
import axios from  'axios' 
// import axios from "./axios" 
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted(){
    console.log("Vue---",Vue);
    console.log("this---",this);
    
    
  }
})
