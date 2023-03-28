<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="700"
    max-height="400"
  >
    <v-row no-gutters>
      <v-col cols="4">
        <!-- <img
        src="../assets/pic/Hainanese-Chicken-Rice-Wide.jpg"
        alt=""
      /> -->
        <v-img
          cover
          height="250"
          src="src/assets/pic/Hainanese-Chicken-Rice-Wide.jpg"
        ></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-item>
          <v-card-title> {{ post.restName }}</v-card-title>

          <v-card-subtitle>
            <span class="me-1">Local Favorite</span>
            <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <div class="my-4 text-subtitle-1">
            {{ post.restValue }} • {{ post.restType }} •
            {{ post.restRating }} ({{ post.restRatingNum }})
          </div>

          <div>{{ post.restDescrip }}</div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>


        <v-row justify="end">
        <v-card-actions>
          <v-btn color="deep-purple-lighten-2" variant="text" @click="readMore">
            Read more
          </v-btn>
        </v-card-actions>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "restaurantCard",
  props: ["post"],
  components: {},
};
</script>

<style scoped>
v-row {
  margin: -12px;
}
</style>
