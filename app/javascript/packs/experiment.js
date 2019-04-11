import Vue from 'vue/dist/vue.esm'
import Experiment from '../components/Experiment.vue'
import { MdDatepicker, MdButton } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdDatepicker)
Vue.use(MdButton)
Vue.use(Experiment)

  new Vue({
    el: '#experiment-demo',
    data: {},
    template: '<Experiment />',
    components: { Experiment }
  })
