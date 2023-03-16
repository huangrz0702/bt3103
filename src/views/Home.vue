<template>
  <h3>This is the homepage</h3>
  <h2>Welcome to meNUS</h2>
  <footerBox/>
</template>

<script>
import navBar from '../components/icons/navBar.vue'
import footerBox from '../components/icons/footerBox.vue'
export default {
  name: "Home",
  components: {
	navBar,
	footerBox
  },
};
</script>