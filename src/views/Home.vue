<template>
<div style="position: relative;">
    <photo-gallery />
    <!-- when click on the images in trending section, it all goes to the same restaurant page !-->

    <search-bar
      style="position: absolute; top: 65%; left: 15%;"
    />
  </div>
  
  <TrendingFood />
  <Locations />
  <br>
  <br>

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
