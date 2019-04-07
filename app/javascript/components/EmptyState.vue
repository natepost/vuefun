<template>
  <div>
    <div class="card">
      <md-empty-state
        md-icon="devices_other"
        md-label="Create your first project"
        md-description="Creating project, you'll be able to upload your design and collaborate with people.">
        <md-button class="md-primary md-raised">Create first project</md-button>
      </md-empty-state>

      <md-tabs>
       <md-tab id="tab-home" md-label="Home"></md-tab>
       <md-tab id="tab-pages" md-label="Pages"></md-tab>
       <md-tab id="tab-posts" md-label="Posts"></md-tab>
       <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
     </md-tabs>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'EmptyStateBasic'
  }
</script>
