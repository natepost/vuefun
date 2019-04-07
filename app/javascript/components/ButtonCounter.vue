<template>
  <div class="box mt-4">
    <p>Hi, I'm the button counter</p>
    <p class="lead">you've clicked me: {{ count }} times</p>
    <button v-model="count" v-on:click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonCounter',
  data: function () {
    return {
      count: 0
    }
  },
}
</script>

<style>
</style>
