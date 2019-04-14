<template>
  <div class="card text-center">

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
              <input v-model="message" class="input" placeholder="add some text">
              <slot name="header"></slot>
            </h5>
            <p class="card-text">
              <slot></slot>
              <div class="row">
                <datepicker label="start"></datepicker>
                <datepicker label="end"></datepicker>
              </div>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </p>
        </div>
      </div>
</template>

<script>
// import { MdDatepicker, MdButton, MdTabs } from 'vue-material/dist/components'
// import { MdButton, MdTabs } from 'vue-material/dist/components'
// import 'vue-material/dist/vue-material.min.css'
import Datepicker from '../components/vuematerial/Datepicker.vue'

export default {
  name: 'Experiment',
  components: { Datepicker },
  data() {
    return {
      message: ''
    }
  }
}
</script>

<style>
</style>
