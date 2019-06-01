import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import db from './firebaseInit.js';

Vue.use(firebase);
Vue.use(db);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
