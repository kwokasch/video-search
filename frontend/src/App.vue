<template>
  <div id="the-app">
    <h1>Video Search</h1>
<!-- Bind value of searchTerm and listen for value from SearchForm component   -->
    <SearchForm
      placeholder="Search for a video"
      icon="search"
      v-model:searchTerm="searchTerm"
    />
<!--  Show all unless searchTerm is entered or filtered results exist  -->
    <ul v-if="!searchTerm || filterVideos.length > 0">
    <!--  Map over filterVideos and pass video as prop to VideoResult  -->
      <li v-for="video in filterVideos" :key="video.id">
        <VideoResult :video="video"/>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';
import VideoResult from '@/components/VideoResult.vue';

function prepareString(string) {
  return string.replace(/\s/g, '')
    .split('')
    .map((letter) => letter.toLowerCase())
    .join('');
}

export default {
  name: 'App',
  components: {
    SearchForm,
    VideoResult,
  },
  data() {
    return {
      // 1. Will need to populate state with data fetched from API
      videos: [],
      // 2. Will need to populate state with searchTerm
      searchTerm: '',
    };
  },
  computed: {
  // 1. Will need to remove special characters and convert to lowercase using created function
  // 2. Will need to filter videos based on searchTerm
    filterVideos() {
      return this.videos.filter((video) => {
        // Strip special characters and convert to lowercase from video title and description
        const title = prepareString(video.title);
        const description = prepareString(video.description);
        // Merge all text
        const text = title + description;
        // Strip special characters and convert to lowercase from searchTerm
        const searchTerm = prepareString(this.searchTerm);

        // Return any videos that contain the searchTerm
        return text.includes(searchTerm);
      });
    },
  },
  created() {
  // 1. Will need to fetch data from API and set state
    fetch('http://localhost:8091/videos')
      .then((response) => response.json())
      .then((response) => {
        this.videos = response.videos;
      });
  },
};
</script>

<style lang="scss">
</style>
