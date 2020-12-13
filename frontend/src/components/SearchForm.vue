<template>
  <form class="search-form">
    <input
      :value="searchTerm"
      @input="$emit('update:searchTerm', $event.target.value)"
      placeholder="Search for a video"
    />
    <font-awesome-icon icon="search" />
  </form>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'SearchForm',
  components: {
    FontAwesomeIcon,
  },
  props: {
    searchTerm: String,
  },
};
</script>

<style lang="scss">
@import "@/styles/_colors.scss";
@import "@/styles/_sizes.scss";

.search-form {
  margin-bottom: $large;
  border: 1px solid $grey-9;
  padding: $small $large;
  width: 300px;
  input {
    border: none;
  }
  svg {
    color: $grey-7;
  }
}
</style>
