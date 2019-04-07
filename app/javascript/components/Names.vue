<template>
  <div>
    <div class="row">
      <h1>All Tasks</h1>
      <task></task>

    </div>
    <hr />
    <h2>{{ names.length }} Names in the list</h2>
    <button @click="show = !show">
      Show/Hide List
    </button>
    <button @click="shuffle">Shuffle</button>

<button :class="{ 'is-loading': isLoading }" @click="toggleClass">Toggle Me</button>
      <!-- <transition-group name="flip-list" tag="ul"> --> -->
        <div v-if="show">
          <li v-for="name in names" v-bind:key="name" class="card">

            <h4 :class="className">{{ name }}</h4>
          </li>
        </div>
      <!-- </transition-group> -->


    <div class="row">
      <input v-model="newName" placeholder="add a name" />
        <button @click="addName">Add a Name</button>
    </div>

  </div>
</template>

<script>
import Task from './Tasks.vue'

  export default {
    name: 'Name',
    components: { Task },

    data() {
      return {
        newName: '',
        names: ['Kristy', 'Blake', 'Nate', 'Oscar'],
        show: true,
        isLoading: false,
        className: 'color-red'
      }
    },

    methods: {
      toggleClass() {
        this.isLoading = true
      },
      shuffle() {
        this.names = _.shuffle(this.names)
      },
      removeName() {
        this.names.splice(this.randomIndex(), 1)
      },
      addName() {
        this.names.push(this.newName)
        this.newName =  ''
      }
    },

    computed: {
      // incompleteTasks() {
      //   return {
      //     this.tasks.filter(tasks => task.completed)
      //   }
      // }

    }
  }
</script>

<style>
  .color-red { color: red; }
  .color-blue { color: blue; }

  .is-loading { background: red; }

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
