<template>
  <h3>This is the restaurant filter page</h3>
  <div>
    <router-link to="/SingleRestaurant">
      <v-btn> Go to one single restaurant page </v-btn>
    </router-link>

    <div class="container">
      <div class="left">
        <filterRest
          :filterRestLoc="filterRestLoc"
          :filterRestCui="filterRestCui"
          :filterRestPri="filterRestPri"
          :filterRestRat="filterRestRat"
          :filterRestPre="filterRestPre"
          :search="search"
          :filteredRest="filteredRest"
        />
      </div>

      <div class ="right">
      <restaurantCard
        :card="card"
        v-for="(card, index) in restaurantCards"
        :key="index"
      />
    </div>
    </div>
  </div>
</template>

<script>
import restaurantCard from "../components/restaurantCard.vue";
import filterRest from "../components/filterRest.vue";

export default {
  name: "Restaurant",
  components: {
    restaurantCard,
    filterRest,
  },
  data() {
    return {
      restaurantCards: [
        {
          restLoc: "Utown",
          restName: "Tiantian Hainanese Chicken Rice",
          restValue: "$",
          restType: "Singaporean cuisine",
          restPre: "Diet",
          restRating: "9.0",
          restRatingNum: "500",
          restDescrip: "Best Hainanese Chicken Rice in NUS",
        },
        {
          restLoc: "PGP",
          restName: "Hong Kong Xiao Chu",
          restValue: "$$",
          restType: "Chinese cuisine",
          restPre: "Diet",
          restRating: "7.5",
          restRatingNum: "700",
          restDescrip: "Best barbecue in NUS",
        },
        {
          restLoc: "Utown",
          restName: "Jiu Li Xiang Mala Hotpot",
          restValue: "$$",
          restType: "Chinese cuisine",
          restPre: "Spicy",
          restRating: "7.9",
          restRatingNum: "590",
          restDescrip: "Best Mala Hotpot in Utown",
        },
        {
          restLoc: "The Deck",
          restName: "Pasta Express",
          restValue: "$$",
          restType: "Italian cuisine",
          restPre: "Diet",
          restRating: "8.2",
          restRatingNum: "800",
          restDescrip: "Best Pasta in NUS",
        }
      ],
    };
  },
  methods: {
    resetRest() {
      this.restaurantCards = [
      {
          restLoc: "Utown",
          restName: "Tiantian Hainanese Chicken Rice",
          restValue: "$",
          restType: "Singaporean cuisine",
          restPre: "Diet",
          restRating: "9.0",
          restRatingNum: "500",
          restDescrip: "Best Hainanese Chicken Rice in NUS",
        },
        {
          restLoc: "PGP",
          restName: "Hong Kong Xiao Chu",
          restValue: "$$",
          restType: "Chinese cuisine",
          restPre: "Diet",
          restRating: "7.5",
          restRatingNum: "700",
          restDescrip: "Best barbecue in NUS",
        },
        {
          restLoc: "Utown",
          restName: "Jiu Li Xiang Mala Hotpot",
          restValue: "$$",
          restType: "Chinese cuisine",
          restPre: "Spicy",
          restRating: "7.9",
          restRatingNum: "590",
          restDescrip: "Best Mala Hotpot in Utown",
        },
        {
          restLoc: "The Deck",
          restName: "Pasta Express",
          restValue: "$$",
          restType: "Italian cuisine",
          restPre: "Diet",
          restRating: "8.2",
          restRatingNum: "800",
          restDescrip: "Best Pasta in NUS",
        },
      ];
    },
    
    search(term) {
      this.resetRest();
      this.restaurantCards = this.restaurantCards.filter((restaurantCard) => {
        return restaurantCard.restLoc.toLowerCase().includes(term.toLowerCase()) || 
        restaurantCard.restType.toLowerCase().includes(term.toLowerCase()) ||
        restaurantCard.restPre.toLowerCase().includes(term.toLowerCase()) || 
        restaurantCard.restName.toLowerCase().includes(term.toLowerCase()) ;
      });
    },
    filterRestLoc(restLoc) {
      if (restLoc === "All") {
        return this.resetRest();
      } else {
        this.restaurantCards = this.restaurantCards.filter((restaurantCard) => {
          return restaurantCard.restLoc === restLoc;
        });
      }
    },
    filterRestCui(restType) {
      this.restaurantCards = this.restaurantCards.filter((restaurantCard) => {
        return restaurantCard.restType === restType + " cuisine";
      });
    },
    filterRestPri(restValue) {
      this.restaurantCards = this.restaurantCards.filter((restaurantCard) => {
        return restaurantCard.restValue === restValue;
      });
    },
    filterRestPre(restPre) {
      this.restaurantCards = this.restaurantCards.filter((restaurantCard) => {
        return restaurantCard.restPre === restPre;
      });
    },
    filterRestRat(restRating) {
      if (restRating === "9.0 and above") {
        this.restaurantCards = this.restaurantCards.filter((restaurantCard) => {
          var numericalRestRating = parseFloat(restaurantCard.restRating);
          return numericalRestRating >= 9.0;
        });
      } else if (restRating === "8.0 - 8.9") {
        this.restaurantCards = this.restaurantCards.filter((restaurantCard) => {
          var numericalRestRating = parseFloat(restaurantCard.restRating);
          return numericalRestRating >= 8.0 && numericalRestRating <= 8.9;
        });
      } else if (restRating === "7.0 - 7.9") {
        this.restaurantCards = this.restaurantCards.filter((restaurantCard) => {
          var numericalRestRating = parseFloat(restaurantCard.restRating);
          return numericalRestRating >= 7.0 && numericalRestRating <= 7.9;
        });
      } else {
        var numericalRestRating = parseFloat(restaurantCard.restRating);
        return numericalRestRating <= 6.9;
      }
    },
  },
};
</script>

<style scoped>
.left {
  float: left;
  width: 30%;
}

.right {
  min-height: 1300px;
}
</style>