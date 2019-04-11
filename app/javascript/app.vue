<template>
  <div id="app">
    <experiment>Hi app.vue</experiment>
    <div class="row">
      <EmptyStateBasic />
      <hr />
    </div>

    <p>hello there: {{ message }}</p>
    <input v-model="message" />
    <ButtonCounter />

    <div class="card">
      <Names />
    </div>

  </div>
</template>

<script>
import Experiment from './components/Experiment.vue'
// import ButtonCounter from './components/ButtonCounter.vue'
// import Names from './components/Names.vue'
// import EmptyStateBasic from './components/EmptyState.vue'


export default {
  name: 'app',
  components: { Experiment },

  data: function() {
    return {

    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
