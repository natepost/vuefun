import Vue from 'vue/dist/vue.esm'
import Experiment from '../components/Experiment.vue'

// Define a new component called button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

new Vue({ el: '#components-demo' });

// Define a new component
Vue.component('experiment', {
  el: '#experiment-demo',
  data() {},
  template: `<Experiment />`,
  components: { Experiment }
});
