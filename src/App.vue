<template>
  <div id="app">
    <headMenu @change="onChange"></headMenu>
    <router-view/>
  </div>
</template>

<script>
import headMenu from './pages/headMenu.vue'

export default {
  name: 'App',
  components: {
    headMenu,
  },
  methods: {
    onChange({key}) {
      if(this.$route.name != key) {
        this.$router.push({name:key});
      }
    }
  },
}
</script>

<style>
#app {
  background: url("@/assets/background.jpg") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>
