import Vue from 'vue/dist/vue.esm'
import Experiment from '../components/Experiment.vue'

// Define a new component
Vue.component('Experiment', {
  data() {
    return {
      message: "hello"
    }
  },
  template: `<div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>

         <div class="card-body">
            <h5 class="card-title">
              Experiment Title:
              {{ message }}
              <slot name="header"></slot>
            </h5>
            <p class="card-text">
              <slot></slot>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </p>
        </div>
      </div>
      `,
});

  new Vue({
    el: '#experiment-demo',
    data: {
    }
  })
