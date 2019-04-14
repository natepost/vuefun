import Vue from 'vue/dist/vue.esm'
import Experiment from '../components/Experiment.vue'
import { MdDatepicker, MdButton, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton)
Vue.use(MdDatepicker)
// Vue.use(MdTabs)
// Vue.use(MdEmptyState)

Vue.use(Experiment)

var nate = new Vue({
    el: '#experiment-demo',
    template: "<Experiment />",
    components: { Experiment }
  })
