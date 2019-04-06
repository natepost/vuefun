<template>
  <div>
    <p>hello there: {{ message }}</p>

  </div>
</template>

<script>
export default {
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
