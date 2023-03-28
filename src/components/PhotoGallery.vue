<template>
      <v-carousel height="400"
          show-arrows="hover"
          hide-delimiter-background
          cycle 
          >
          <v-carousel-item 
          v-for="photo in photos" 
          :src="photo.imageURL"
          :key="photo.id" 
          cover>
          </v-carousel-item>   
  </v-carousel>

  <br><br>
</template>

<script>

export default {
  name: "PhotoGallery",
  components: {

  },
  data(){
    return {
      photos: [
      {imageURL: "src/assets/pic/homepage.jpeg"},
      {imageURL: "src/assets/pic/mainpage.jpeg"},
      ]
    }
  }
  
};
</script>