<template>
  <h2>Filters</h2>

  <br /><br />
  <input id="search" placeholder="Search here" v-model="term" />
  <br />
  <input class="btn" type="submit" @click="search(term)" />


  <h3>Location</h3>
  <p
    v-for="filter in filters1"
    :key="filter"
    @click="() => filterRestLoc(filter)"
  >
    {{ filter }}
  </p>

  <h3>Cuisine</h3>
  <p
    v-for="filter in filters2"
    :key="filter"
    @click="() => filterRestCui(filter)"
  >
    {{ filter }}
  </p>

  <h3>Price</h3>
  <p
    v-for="filter in filters3"
    :key="filter"
    @click="() => filterRestPri(filter)"
  >
    {{ filter }}
  </p>

  <h3>Rating</h3>
  <p
    v-for="filter in filters4"
    :key="filter"
    @click="() => filterRestRat(filter)"
  >
    {{ filter }}
  </p>

  <h3>Preference</h3>
  <p
    v-for="filter in filters5"
    :key="filter"
    @click="() => filterRestPre(filter)"
  >
    {{ filter }}
  </p>
</template>

<script>


const filters1 = ["All", "Utown", "PGP", "The Deck"];

const filters2 = ["Singaporean", "Chinese", "Italian"];

const filters3 = ["$", "$$", "$$$"];

const filters4 = ["9.0 and above", "8.0 - 8.9", "7.0 - 7.9", "6.9 and below"];

const filters5 = ["Halal", "Vegetarian", "Diet"];

export default {
  props: [
    "filterRestLoc",
    "filterRestCui",
    "filterRestPri",
    "filterRestRat",
    "filterRestPre",
    "search",
    "filteredRest"
  ],
  data() {
    return {
      filters1,
      filters2,
      filters3,
      filters4,
      filters5,
      term: "",
    };
  },
};
</script>

<style lang="scss" scoped>
input {
  background-color: whitesmoke;
  color: black;
  padding: 10px;
  width: 200px;
  border: none;
  font-size: 15px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
}

.btn {
  background-color: rgba(237, 209, 96, 0.669);
  width: 50%;
  padding: 10px;
  border: 0ch;
  border-radius: 30px;
  cursor: pointer;
  color: black(237, 209, 96, 0.669);
}

p {
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.5s ease-in all;
  &:hover {
    color: rgba(153, 126, 18, 0.669);
  }
}
</style>