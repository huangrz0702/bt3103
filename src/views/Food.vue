<template>
  <FilterParameters />
  <FilterResults />
  <SearchBar />
</template>

<script>
import FilterParameters from "../components/FilterParameters.vue";
import FilterResults from "../components/FilterResults.vue";
import SearchBar from "../components/SearchBar.vue";

export default {
  components: {
    FilterParameters,
    FilterResults,
    SearchBar,
  },
};
</script>
