<template>
  <SlidingImages />
  <TrendingFood />
  <Locations />
  <RelatedLinks />
</template>

<script>
import SlidingImages from "../components/SlidingImages.vue";
import TrendingFood from "../components/TrendingFood.vue";
import Locations from "../components/Locations.vue";
import RelatedLinks from "../components/RelatedLinks.vue";

export default {
  name: "App",
  components: {
    SlidingImages,
    TrendingFood,
    Locations,
    RelatedLinks,
  },
};
</script>
