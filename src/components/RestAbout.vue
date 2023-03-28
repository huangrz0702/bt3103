<template>
<!-- This is the restaurant About component -->
  <v-card
    class="mx-auto  my-12"
    width="300"
    height="500"
  >

    <v-card-item class="text-h6">
        <v-icon
          icon="mdi-information"
          size="25"
          color=green
          class="me-1 pb-1"
        ></v-icon>
        About
    </v-card-item>

    <v-card-text>
        <div class="text-grey ms-4">
          Price: {{Price}}
        </div>

        <div class="text-grey ms-4">
          Address: {{Address}}
        </div>
    </v-card-text>

        <v-list class="bg-transparent">
          <v-list-item
            v-for="item in Opening"
            :key="item.day"
            :title="item.day"
            :append-icon="item.icon"
            :subtitle="item.hours"
          >
          </v-list-item>
        </v-list>
 
  </v-card>
</template>


<script>
  export default {
    data: () => ({
        Price: "$5 - $10",
        Address: "Stall 1, Fine Food, 1 Create Way, Town Plaza, 138602",
      Opening: [
        { day: 'Monday', hours: '11:00 AM - 6:00 PM' },
        { day: 'Tuesday', hours: '11:00 AM - 6:00 PM' },
        { day: 'Wednesday', hours: '11:00 AM - 6:00 PM' },
        { day: 'Thursday', hours: '11:00 AM - 6:00 PM' },
        { day: 'Friday', hours: '11:00 AM - 6:00 PM' },
        { day: 'Saturday', hours: '11:00 AM - 6:00 PM' },
        { day: 'Sunday', hours: '11:00 AM - 6:00 PM' },
      ],
    }),
  }
</script>