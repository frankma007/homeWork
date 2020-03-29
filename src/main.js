
import Vue from 'vue';
// import Button from 'ant-design-vue/lib/button';
// import { Table, Button, Col, Row, DatePicker } from 'ant-design-vue';
// import Row from 'ant-design-vue/lib/row';
// import Col from 'ant-design-vue/lib/col';
// import DatePicker from 'ant-design-vue/lib/date-picker';
// import RangePicker from 'ant-design-vue/lib/range-picker';
// import 'ant-design-vue/dist/antd.css';
import App from './App';
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
