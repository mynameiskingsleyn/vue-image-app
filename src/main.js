import Vue from 'vue';
import App from './App';
import store from './store';
import VueRouter from 'vue-router';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm'

Vue.use(VueRouter);
export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component:ImageList},
    { path: '/oauth/callback', component:AuthHandler},
    { path: '/upload', component:UploadForm},
  ]
})
new Vue({
    //el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app');
