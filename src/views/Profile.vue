<template>
  <div id="container1">
    <ProfileBar />
    <MyProfile />
  </div>
  

</template>

<script>
import ProfileBar from "../components/ProfileBar.vue";
import MyProfile from "../components/MyProfile.vue";


export default {
  components: {
    ProfileBar,
    MyProfile,
  },
};
</script>

<style>
#container1{
  display: flex;
}
</style>