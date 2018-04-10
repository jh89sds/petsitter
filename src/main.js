// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

var config = {
  apiKey: "AIzaSyDrT5ztdUEjuXKvEK1QMLaB1Vf80GvLcLY",
  authDomain: "friendspetsitter.firebaseapp.com",
  databaseURL: "https://friendspetsitter.firebaseio.com",
  projectId: "friendspetsitter",
  storageBucket: "friendspetsitter.appspot.com",
  messagingSenderId: "1031150508085"
};
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
