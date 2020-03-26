// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
import Vue from 'vue';
// import Button from 'ant-design-vue/lib/button';
// import { Table, Button, Col, Row, DatePicker } from 'ant-design-vue';
// import Row from 'ant-design-vue/lib/row';
// import Col from 'ant-design-vue/lib/col';
// import DatePicker from 'ant-design-vue/lib/date-picker';
// import RangePicker from 'ant-design-vue/lib/range-picker';
// import 'ant-design-vue/dist/antd.css';
import App from './App';

// Vue.use(AntDV);
// Vue.component(Table.name, Table);
// Vue.component(Button.name, Button);
// Vue.component(Col.name, Col);
// Vue.component(Row.name, Row);
// Vue.component(DatePicker.name, DatePicker);
// Vue.component(RangePicker.name, RangePicker);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
