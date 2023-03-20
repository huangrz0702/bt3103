<template>
  <ProfileBar />
  <MyProfile />
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
