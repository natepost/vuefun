/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.
import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'
import { MdButton, MdContent, MdTabs, MdEmptyState, MdIcon } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton)
Vue.use(MdIcon)
Vue.use(MdTabs)
Vue.use(MdEmptyState)

var nate = new Vue({
  el: '#blog-post-demo',
  data: function() {
    return {
      message: '',
    }
  },

  mounted() {
    // alert('ready')
  },
    template: '<App />',
    components: { App }
  });

Vue.component('task', {
  template: '<li>Natebar</li>'
})
