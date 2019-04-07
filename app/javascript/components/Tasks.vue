<template>
  <div>
    <ul>
      <li v-for="task in tasks" v-text="task.description"></li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Task',
  data() {
    return {
      tasks: [
        { description: 'Happy Store runs', completed: false },
        { description: 'Yoidlkdie upsfasdsd runs', completed: true },
        { description: 'Happy Store runs', completed: false },
        { description: 'asdf Store ruasdfns', completed: false },
        { description: 'Happy asdf runs', completed: true },
        { description: 'Haasdfasdfppy Store ruasdfns', completed: true },
        { description: 'Happy asdf runs', completed: false },
        { description: 'Hafasdasdfappy Store runs', completed: true },
      ],
    }
  }

}
</script>

<style>
</style>
