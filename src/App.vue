<template>
  <div id="app">
    <top/>
    <main-body></main-body>
  </div>
</template>

<script>
import top from './components/top.vue'
import MainBody from './components/MainBody.vue'
export default {
  name: 'app',
  components: {
    top,
    MainBody
  }
}
</script>

<style>

</style>
