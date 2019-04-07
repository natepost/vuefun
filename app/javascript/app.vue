<template>
  <div>
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
import ButtonCounter from './components/ButtonCounter.vue'
import Names from './components/Names.vue'
import EmptyStateBasic from './components/EmptyState.vue'


export default {
  components: { ButtonCounter, Names, EmptyStateBasic },

  data: function() {
    return {
      message: "Hi, Nate!"
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
