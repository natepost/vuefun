<template>
  <div>
    <p>hello there: {{ message }}</p>
    <input v-model="message" />

    <ButtonCounter />

  </div>
</template>

<script>
import ButtonCounter from './components/ButtonCounter.vue'

export default {
  components: { ButtonCounter },

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
