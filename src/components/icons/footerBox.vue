<template>
  <link
    href="https://unpkg.com/css.gg@2.0.0/icons/css/facebook.css"
    rel="stylesheet"
  />
  <link
    href="https://unpkg.com/css.gg@2.0.0/icons/css/twitter.css"
    rel="stylesheet"
  />
  <link
    href="https://unpkg.com/css.gg@2.0.0/icons/css/instagram.css"
    rel="stylesheet"
  />
  <link
    href="https://unpkg.com/css.gg@2.0.0/icons/css/google.css"
    rel="stylesheet"
  />

  <div class="footer">
    <MDBFooter bg="white" :text="['center', 'black']">
      <MDBContainer class="p-4">
        <section class="mb-3">
          <img src="../../assets/pic/transparent_logo.png" alt="meNUS logo" />
        </section>

        <section class="mb-3">
          <MDBRow>
            <MDBCol lg="4" md="6" class="mb-3 mb-md-0">
              <h5 class="text-uppercase">Navigation</h5>
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="/Home" class="text-white">Home</a>
                </li>
                <li>
                  <a href="/Food" class="text-white">Food</a>
                </li>
                <li>
                  <a href="/Profile" class="text-white">Profile</a>
                </li>
                <li>
                  <a href="/Login" class="text-white">Login/Register</a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="4" md="6" class="mb-3 mb-md-0">
              <h5 class="text-uppercase">About Us</h5>
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">FAQ</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Term Of Service</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Suppory</a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="4" md="6" class="mb-3 mb-md-0">
              <h5 class="text-uppercase">Contact Us</h5>
              <ul class="list-unstyled mb-0">
                <li>
                  <h8>15 Computing Dr</h8>
                </li>
                <li>
                  <h8>Singapore 117418</h8>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
        <section class="mb-4">
          <a href="https://www.facebook.com" class="link">
            <i class="gg-facebook"></i>
          </a>
          <a href="https://www.twitter.com" class="link">
            <i class="gg-twitter"></i>
          </a>
          <a href="https://www.instagram.com" class="link">
            <i class="gg-instagram"></i>
          </a>
          <a href="https://www.google.com" class="link">
            <i class="gg-google"></i>
          </a>
        </section>
      </MDBContainer>
      <div class="text-center p-3">© 2023 Copyright: meNUS</div>
    </MDBFooter>
  </div>
</template>

<script setup lang="ts">
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from "mdb-vue-ui-kit";
</script>

<style scoped>
img {
  max-width: 100%;
  display: block;
  margin-right: auto;
  width: 150px;
  height: auto;
}

div {
  max-width: 1600px;
  background-color: rgba(255, 192, 203, 1);
}
.mb-4 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mb-4 i {
  margin: 0 10px;
}

ul {
  color: white; 
}
</style>