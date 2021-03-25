import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* 引入vant_UI组件 */
import Vant from "vant";
import "vant/lib/index.css";

Vue.config.productionTip = false;

Vue.use(Vant);

/* 伪初始数据表 */
if(localStorage.totalInfo){

}else{
  let datas = []
  for(let i=0;i<12;i++){
    let data = {
          month: i>=10 ? i+1 : "0"+(i+1),
          monthIncome: 0,
          monthExpend: 0,
          days: []
    }
    datas.push(data)
  }
  localStorage.setItem("totalInfo",JSON.stringify(datas))
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
