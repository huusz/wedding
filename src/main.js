import Vue from 'vue'
import VScrollLock from 'v-scroll-lock'
import App from './App.vue'
import Divider from './components/Divider.vue'
import Button from './components/Button.vue'
import firebase from 'firebase/app'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueClipboard from 'vue-clipboard2'
import naver from 'vue-naver-maps';

Vue.config.productionTip = false

Vue.use(VScrollLock)
Vue.use(VueClipboard)
Vue.component('Divider', Divider)
Vue.component('Button', Button)
Vue.use(naver, {
  clientID: 'u81yhz5del',
  useGovAPI: false, //공공 클라우드 API 사용 (선택)
  subModules:'' // 서브모듈 (선택)
});

// use your firebase info
var firebaseConfig = {
  apiKey: 'Use your api key',
  authDomain: 'carepass-test.firebaseapp.com',
  databaseURL: 'https://carepass-test.firebaseio.com',
  projectId: 'carepass-test',
  storageBucket: 'carepass-test.appspot.com',
  messagingSenderId: '{Use your messagingSenderId}',
  appId: '{Use your appId}',
}
firebase.initializeApp(firebaseConfig)

new AOS.init()

new Vue({
  render: (h) => h(App),
}).$mount('#app')
