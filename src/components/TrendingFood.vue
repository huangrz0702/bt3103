<template>

<v-sheet height="300" width=95% class="mx-auto">
      <div class="d-flex pa-5">
        <v-icon size="30">mdi-star-shooting</v-icon>
        <h3 class="ml-5" :style="{ color: '	#1F51FF', fontWeight: 'bold' }">What is Trending?</h3>
      </div>
    <trendingimage-slider />
</v-sheet>
</template>

<script>

import TrendingimageSlider from './TrendingimageSlider.vue';

export default {
  components: { TrendingimageSlider },};
</script>

<style></style>
