<template>
  <div>
    <h2>{{ names.length }} Names in the list</h2>
    <button @click="show = !show">
      Show/Hide List
    </button>

    <ul v-if="show">
      <li v-for="name in names" v-bind:key="name">
        {{ name }}
      </li>
    </ul>
    <div class="row">
      <input v-model="newName" placeholder="add a name" />

        <button @click="addName">Add a Name</button>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Name',
    data() {
      return {
        newName: '',
        names: ['Kristy', 'Blake', 'Nate', 'Oscar'],
        show: true
      }
    },

    methods: {
      removeName() {
        this.names.splice(this.randomIndex(), 1)
      },
      addName() {
        this.names.push(this.newName)
        this.newName =  ''
      }
    }
  }
</script>

<style>
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }

</style>
