<template>
  <div id="app">
    <dashboard></dashboard>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    //Login: () => import('@/components/Login/Login.vue'),
    Dashboard: () => import('@/components/Dashboard/Dashboard.vue'),
  }
}
</script>

<style>
</style>
