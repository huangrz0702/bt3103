<template>
  <link
    href="https://unpkg.com/css.gg@2.0.0/icons/css/chevron-down.css"
    rel="stylesheet"
  />
  <div id="nav">
    <div class="nav-links">
      <!-- <router-link to="/">
        <img src="../../assets/pic/meNUS_logo.png" alt="meNUS logo" />
      </router-link> -->
      <div class="dropdown">
        <button class="dropbtn">
          Home
          <i class="gg-chevron-down"></i>
          <div class="dropdown-content">
            <router-link class="link" to="/">Main Page</router-link>
            <router-link class="link" to="/Promotion">Promotion</router-link>
          </div>
        </button>
      </div>
      <div class="dropdown">
        <button class="dropbtn">
          Filter
          <i class="gg-chevron-down"></i>
          <div class="dropdown-content">
            <router-link class="link" to="/Food">Food</router-link>
            <router-link class="link" to="/Restaurant">Restaurant</router-link>
          </div>
        </button>
      </div>

      <div class="dropdown">
        <button class="dropbtn">
          Profile
          <i class="gg-chevron-down"></i>
          <div class="dropdown-content">
            <router-link class="link" to="/Profile">Profile</router-link>
            <router-link class="link" to="/Preference">Preference</router-link>
            <router-link class="link" to="/Hist">History</router-link>
          </div>
        </button>
      </div>

      <div class="dropdown">
        <button class="dropbtn">
          Login/Register
          <i class="gg-chevron-down"></i>
          <div class="dropdown-content">
            <router-link class="link" to="/Login">Login</router-link>
            <router-link class="link" to="/Register">Register</router-link>
          </div>
        </button>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script lang="ts">
export default {
  name: "navBar",
};
</script>

<style lang="scss" scoped>
#nav {
  background-color: rgba(120, 244, 181, 1);
  max-height: 250px;
}

// img {
//   float: left;
//   margin-right: 50vw;
// }
.dropdown {
  float: right;
  display: flex;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown .dropbtn {
  font-size: 20px;
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown:hover .dropbtn {
  color: #253db3;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.nav-links {
    position: relative;
    flex: 1;
    display: flex;

    .link {
      color: black;

      &:hover {
        color: #253db3;
      }
    }
  }
  
</style>