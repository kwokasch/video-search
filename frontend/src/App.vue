<template>
  <div id="the-app">
    <h1>Video Search</h1>
    <form class="search-form">
      <input v-model="searchTerm" placeholder="Search for a video" />
      <font-awesome-icon icon="search" />
    </form>
    <ul>
      <li v-for="searchResult in searchResults" :key="searchResult.id">
        <div class="video-result">
          <a href="#"><img src="https://www.schedfast.today/app/webroot/img/video_poster_default.png" alt="" /></a>
          <section>
            <h2>{{ searchResult.title }}</h2>
            <p>{{ searchResult.description }}</p>
          </section>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

function normalizeString(string) {
  return string.replace(/\s/g, '')
    .split('')
    .map((letter) => letter.toLowerCase())
    .join('');
}

export default {
  name: 'App',
  data() {
    return {
      searchTerm: '',
      videos: [{
        id: 1,
        imageUrl: 'https://www.schedfast.today/app/webroot/img/video_poster_default.png',
        title: 'Video',
        description: 'This is a video description',
      }, {
        id: 2,
        imageUrl: 'https://www.schedfast.today/app/webroot/img/video_poster_default.png',
        title: 'Video',
        description: 'This is a video description',
      }, {
        id: 3,
        imageUrl: 'https://www.schedfast.today/app/webroot/img/video_poster_default.png',
        title: 'Video',
        description: 'This is a video description',
      }, {
        id: 4,
        imageUrl: 'https://www.schedfast.today/app/webroot/img/video_poster_default.png',
        title: 'Video',
        description: 'This is a video description',
      }, {
        id: 5,
        imageUrl: 'https://www.schedfast.today/app/webroot/img/video_poster_default.png',
        title: 'Video',
        description: 'This is a video description',
      }, {
        id: 6,
        imageUrl: 'https://www.schedfast.today/app/webroot/img/video_poster_default.png',
        title: 'Video',
        description: 'This is a video description',
      }],
    };
  },
  components: {
    FontAwesomeIcon,
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
  .video-result {
    width: 600px;
    box-shadow: 0 2px 1px $grey-7;
    display: grid;
    grid-template-columns: 150px 1fr;
    padding: $xl;
    margin-bottom: $xl;
    h2 {
      @include heading-font-2;
    }
    section {
      padding: 0 $large;
    }
  }
}
</style>
