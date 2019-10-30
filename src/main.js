import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Progress,
  Card,
  Timeline,
  TimelineItem,
  Backtop,
  Icon,
  Carousel,
  CarouselItem,
  Row,
  Col,
  Button
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css'

Vue.use(Progress);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Card);
Vue.use(Backtop);
Vue.use(Icon);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');