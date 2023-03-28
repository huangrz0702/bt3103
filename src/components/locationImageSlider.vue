<template>

  <v-sheet
    class="mx-auto"
    max-width=98%
    height="400"
  >
    <v-slide-group
      show-arrows

    >
      <v-slide-group-item
        v-for="(image, index) in images"
        :key="index"
        v-slot="{ isSelected, toggle }"

      >
        <img
          class="ma-2"
          :src="image"
          :style="{ border: isSelected ? '2px solid blue' : 'none' }"
         
          height="200"
          width="267"
        />
        <!-- @click= "goToRestaurant(image.id)" !-->
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      images: [ //change these images to location image
        "src/assets/pic/download.jpg",
        "src/assets/pic/download-1.jpg",
        "src/assets/pic/download-2.jpg",
        "src/assets/pic/download-3.jpg",
        "src/assets/pic/download-4.jpg",
        "src/assets/pic/xiaolongbao.jpg",
        "src/assets/pic/Jajangmyeon.jpg",
      ],
    };
  },
    // methods: {
    // goToRestaurant(id) {
    //     this.$router.push(`/SingleRestaurant`);
    //     //this.$router.push(`/SingleRestaurant/${id}`);
    // },
    // }
};
</script>

