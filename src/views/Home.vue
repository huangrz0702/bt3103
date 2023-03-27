<template>
  <photo-gallery />
  <search-bar />
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
import PhotoGallery from '../components/PhotoGallery.vue';
import SearchBar from '../components/SearchBar.vue';

export default {
  name: "App",
  components: {
    PhotoGallery,
    SlidingImages,
    TrendingFood,
    Locations,
    RelatedLinks,
    SearchBar,
  },
};
</script>
