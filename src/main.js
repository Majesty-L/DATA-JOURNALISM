import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import * as echarts from 'echarts';

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.prototype.$echarts = echarts;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
