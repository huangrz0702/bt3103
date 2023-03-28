<template>

  <div style="display:flex; justify-content: center;">
  <rest-intro />
  <rest-about />
  </div>
  <crowdedness />
  <review-slider />
</template>

<script>
import App from '../App.vue';
import Crowdedness from '../components/Crowdedness.vue';
import RestAbout from '../components/RestAbout.vue';
import RestIntro from '../components/RestIntro.vue';
import ReviewSlider from '../components/ReviewSlider.vue';

export default {
  name: "SingleRestaurant",
  components:{
    RestIntro,
    ReviewSlider,
    RestAbout,
    App,
    Crowdedness
  },
  beforeRouteEnter(to, from, next) {
    // scroll to top of page
    window.scrollTo(0, 0);
    next();
  },
};
</script>