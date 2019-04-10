<template>
  <div>
    <div class="card">
       <div class="card-body">
          <p class="card-title">
            Experiment Title:
            <slot name="header"></slot>
          </p>
          <p class="card-text">
            <slot></slot>
          </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experiment',
}
</script>

<style>
</style>
