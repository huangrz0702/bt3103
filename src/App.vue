<template>
<navBar />
<footerBox />
</template>

<script>
import navBar from '../src/components/icons/navBar.vue'
import footerBox from '../src/components/icons/footerBox.vue'

export default {
  name: 'App',
  components: {
    navBar,
    footerBox,
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