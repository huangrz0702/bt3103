<template>
    <div id="nav">
    <router-link to="/">
    <img src="../../assets/pic/meNUS_logo.png" alt="meNUS logo" />
    </router-link>
    <router-link to="/">Home</router-link> |
    <router-link to="/Food">Food</router-link> |
    <router-link to="/Profile">Profile</router-link> |
    <router-link to="/Login">Login</router-link> |
    <router-link to="/Register">Register</router-link>
  </div>
  <router-view/>
</template>

<script lang="ts">
export default {
    name: 'navBar'
    
}
</script>

<style scoped>
#nav {
  padding: 30px
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>