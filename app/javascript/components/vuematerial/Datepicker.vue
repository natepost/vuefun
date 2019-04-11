<template>
  <div>
    <md-datepicker v-model="selectedDate" md-immediately />
  </div>
</template>

<script>
  export default {
    name: 'Datepicker',
    data: () => ({
      selectedDate: new Date('2019/03/26')
    })
  }
</script>
