<template>


<v-sheet height="300" width=95% class="mx-auto">
 
      <div class="d-flex pa-5">
        <v-icon size="30">mdi-star-shooting</v-icon>
        <h3 class="ml-5" :style="{ color: '	#1F51FF', fontWeight: 'bold' }">Locations</h3>
      </div>
    <location-image-slider />

</v-sheet>
</template>

<script>


import LocationImageSlider from './locationImageSlider.vue';

export default {
  components: { LocationImageSlider },};
</script>

<style></style>
