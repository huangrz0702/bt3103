<template>
  <NavBar />
  <FilterParameters />
  <FilterResults />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FilterParameters from "../components/FilterParameters.vue";
import FilterResults from "../components/FilterResults.vue";

export default {
  components: {
    NavBar,
    FilterParameters,
    FilterResults,
  },
};
</script>
