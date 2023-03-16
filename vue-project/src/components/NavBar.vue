<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/FoodSearch">FoodSearch</router-link></li>
      <li><router-link to="/Profile">Profile</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  width: 100%;
  background-color: rgb(70, 241, 36);
  overflow: hidden;
  height: 30pt;
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}

.active {
  background-color: #4caf50;
  color: white;
}
</style>
