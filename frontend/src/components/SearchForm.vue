<template>
<!-- SearchForm component emits searchTerm value from <input> -->
<!-- and will trigger update of searchTerm in App.vue  -->
  <form class="search-form">
    <input
      :placeholder="placeholder"
      @input="$emit('update:searchTerm', $event.target.value)"
    >
    <font-awesome-icon :icon="icon" />
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
    placeholder: String,
    icon: String,
    searchTerm: String,
  },
};
</script>

<style lang="scss">
</style>
