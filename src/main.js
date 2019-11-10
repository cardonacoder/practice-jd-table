import Vue from 'vue'
import App from './App.vue'
import JDTable from 'vue-jd-table';

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'vue-jd-table/dist/jd-table.min.css';


Vue.component( 'jdtable',JDTable );

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
