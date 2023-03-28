<template>
  <div id="container1">
    <ProfileBar />
    <History/>
  </div>
</template>


<script>
import ProfileBar from "../components/ProfileBar.vue";
import History from "../components/History.vue";

export default {
    components: {
      ProfileBar,
      History
    },
  };
</script>



<style>
#container1{
  display: flex;
}
</style>