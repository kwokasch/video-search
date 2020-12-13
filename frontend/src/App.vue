<template>
  <div id="the-app">
    <h1>Video Search</h1>
    <SearchForm v-model:searchTerm="searchTerm" />
    <ul>
      <li v-for="searchResult in searchResults" :key="searchResult.id">
        <VideoResult :video="searchResult" />
      </li>
    </ul>
  </div>
</template>

<script>
import VideoResult from '@/components/VideoResult.vue';
import SearchForm from '@/components/SearchForm.vue';

function normalizeString(string) {
  return string.replace(/\s/g, '')
    .split('')
    .map((letter) => letter.toLowerCase())
    .join('');
}

export default {
  name: 'App',
  components: {
    VideoResult,
    SearchForm,
  },
  data() {
    return {
      searchTerm: '',
      videos: [],
    };
  },
  created() {
    fetch('http://localhost:8091/videos')
      .then((response) => response.json())
      .then((response) => {
        this.videos = response.videos;
      });
  },
  computed: {
    searchResults() {
      return this.videos.filter((video) => {
        const text = normalizeString(video.title + video.description);
        const searchTerm = normalizeString(this.searchTerm);

        return text.includes(searchTerm);
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_reset.scss";

#the-app {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: $xl;
  h1 {
    @include heading-font-1;
  }
}
</style>
