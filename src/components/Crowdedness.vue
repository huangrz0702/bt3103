<template>
  <v-card
    class="mx-auto  pa-3"
    width=93%
  >
    <v-form @submit.prevent>
      <v-row>
        <v-col cols="2" class="d-flex align-center">
          <span class="text-h6">Crowdedness</span>
        </v-col>

        <v-col cols="3" class="d-flex align-center">
          <span class="text-body-1">{{crowd}}</span>
        </v-col>

        <v-col cols="2">
          <v-select
            label="Select"
            :items="items"
            variant="underlined"
          ></v-select>
        </v-col>

        <v-col cols="2">
          <v-btn type="submit" block class="mt-2">Report Crowdedness</v-btn>
        </v-col>

    
      </v-row>
    </v-form>

  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: ["less than 5 people", "5 - 10 people", "more than 10 people"],
    crowd: "less than 5 people(5 mins ago)"
  }),
};
</script>
