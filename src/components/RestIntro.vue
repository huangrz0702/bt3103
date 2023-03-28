<template>
<!-- This is the restaurant introduction card component -->
  <v-card
    class="mx-auto my-12"
    width="1000"
    height="500"
  >


    <v-img
      cover
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-item>
      <v-card-title>{{restName}}</v-card-title>

      <v-card-subtitle>
        <span class="me-1">{{type}}</span>

        <v-icon
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
        justify="center"
      >
        <v-rating 
            v-model="rating" 
            dense
            color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4" >
          {{rating}} ({{numberComment}})
        </div>
        
      </v-row>
       <v-divider class="mx-4 mb-1"></v-divider>


      <div class="my-4 text-subtitle-1">
        $ {{price}} • {{Labels}}
      </div>

      <div> {{Intro}}</div>
    </v-card-text>



  </v-card>
</template>

<script>
  export default {
    data: () => ({
        restName : "Japanese and Korean",
        type: "Local Favorite",
        rating: 4.5,
        numberComment : 413,
        price: "5 - 10",
        Labels: "Japanese, Korean, Cafe",
        Intro: "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
    }),

  }
</script>