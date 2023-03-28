<template>
  <v-card
    class="mx-auto"
    elevation="0"
    width=70%
    :style="{ backgroundColor: 'transparent' }"
    
  >
    <v-card-text>
      <v-text-field
        :loading="loading"
        density="compact"
        variant="solo"
        label="Try searching for a location, stall, or cuisine"
        append-inner-icon="mdi-magnify"
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>

<script>


export default {
    data: () => ({
      loaded: false,
      loading: false,
    }),

    methods: {
      onClick () { //write search logic here
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },
  }


</script>

<style></style>
