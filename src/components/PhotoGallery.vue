<template>
  <h3>This is the homepage</h3>
  <h2>Welcome to meNUS</h2>

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
      {imageURL: 'https://joybauer.com/wp-content/uploads/2016/02/thumb_2139_content_big_wide.jpg', id: 'p1', title: 't1'},
      {imageURL: 'https://thumbs.dreamstime.com/b/assortment-vegan-vegetarian-balanced-diet-foods-wide-composition-flat-lay-fruit-vegetables-nut-greens-essential-products-174537144.jpg', id: 'p2', title: 't2'},
      ]
    }
  }
  
};
</script>