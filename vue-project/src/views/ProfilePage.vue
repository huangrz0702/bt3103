<template>
  <NavBar />
  <ProfileBar />
  <MyProfile />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import ProfileBar from "../components/ProfileBar.vue";
import MyProfile from "../components/MyProfile.vue";
export default {
  components: {
    NavBar,
    ProfileBar,
    MyProfile,
  },
};
</script>
