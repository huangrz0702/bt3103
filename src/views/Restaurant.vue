<template>
    <h3> This is the restaurant filter page</h3>
    <restaurantCard
            :post="post"
            v-for="(post, index) in sampleRestaurantCards"
            :key="index"
          />
</template>

<script>
import restaurantCard from "../components/restaurantCard.vue";

export default {
    name: "Restaurant",
    components: {
      restaurantCard
    },
    data() {
      return {
        sampleRestaurantCards: [
        {
          // restCover: "Hainanese-Chicken-Rice-Wide",
          restName: "Tiantian Hainanese Chicken Rice",
          restValue: "$",
          restType: "Singaporean cuisine",
          restRating: "9.0",
          restRatingNum: "500",
          restDescrip: "Best Hainanese Chicken Rice in NUS"
        },
        {
          restName: "Tiantian Hainanese Chicken Rice",
          restValue: "$",
          restType: "Local cuisine",
          restRating: "9.0",
          restRatingNum: "500",
          restDescrip: "Best Hainanese Chicken Rice in NUS"
        }
      ]
      }
      

    }
  };
</script>