<template>
  <v-sheet
    class="mx-auto"
    max-width=100%
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-primary"
      show-arrows
    >
      <v-slide-group-item
        v-for="n in 5"
        :key="n"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <v-card
          color=#B19FF9
          theme="dark"
          :class="['ma-4', selectedClass]"
          height="220"
          width="400"
          @click="toggle"
          title="Customer Review"
        >
         <template v-slot:prepend>
            <v-icon size="x-large"></v-icon>
            </template>

            <v-card-text class="text-h5 py-2">
            "The fusion of Japanese and Korean flavors at this restaurant creates a delightful culinary experience.
            </v-card-text>

                <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar
            color="grey-darken-3"
            image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-avatar>
        </template>

        <v-list-item-title>Customer Name</v-list-item-title>

                <template v-slot:append>
          <div class="justify-self-end">
            <v-icon class="me-1" icon="mdi-heart"></v-icon>
            <span class="subheading me-2">256</span>
 
          </div>
        </template>
      </v-list-item>
    </v-card-actions>

        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>