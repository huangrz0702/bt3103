<template>
  <NavBar />
  <SlidingImages />
  <TrendingFood />
  <Locations />
  <RelatedLinks />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import SlidingImages from "../components/SlidingImages.vue";
import TrendingFood from "../components/TrendingFood.vue";
import Locations from "../components/Locations.vue";
import RelatedLinks from "../components/RelatedLinks.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SlidingImages,
    TrendingFood,
    Locations,
    RelatedLinks,
  },
};
</script>
