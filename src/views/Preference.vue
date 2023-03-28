<template>
  <div id="container1">
    <ProfileBar />
    <Preferinfo />
  </div>
</template>


<script>
import ProfileBar from "../components/ProfileBar.vue";
import Preferinfo from "../components/Preferinfo.vue";

export default {
    components: {
      ProfileBar,
      Preferinfo
    },
  };
</script>


<style>
#container1{
  display: flex;
}
</style>