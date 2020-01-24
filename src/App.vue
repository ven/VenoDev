<template>
  <div id="app">
    <NavigationBar />
    <vue-page-transition name="fade-in-up">
      <router-view/>
    </vue-page-transition>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar';

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style lang="scss">
body {
  background-color: #6b46c1;
}
</style>
