// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios'
import vueAxios from 'vue-axios'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(vueAxios, axios)


/* eslint-disable no-new */
let Osas = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data() {
    return {
      test: "test",
      lat: '',
      lng: ''
    }
  }

})

var marker;

let map = new GMaps({
  el: '#map',
  lat: -34.397,
  lng: 150.644,
  zoom: 8,
  click: function(e) {
    addMarker(JSON.stringify(e.latLng))
    // console.log(map);
  }
});
//
function addMarker(e) {
  e = JSON.parse(e)
  if(map.markers.length != 0)
    map.removeMarkers()

    map.addMarker({
      lat: e.lat,
      lng: e.lng,
      title: 'rumah baru'
    })
    console.log(e);
    Osas.lat = e.lat
    Osas.lng = e.lng
}
