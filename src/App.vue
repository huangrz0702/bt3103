<template>
<navBar/>
</template>

<script>
import navBar from '../src/components/icons/navBar.vue'

export default {
  name: 'App',
  components: {
    navBar,
  }
}

</script>

<style>
#app {
  font-family : 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px
}
#bg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}
</style>