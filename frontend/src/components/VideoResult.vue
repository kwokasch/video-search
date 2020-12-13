<template>
  <div class="video-result">
    <a :href="linkUrl"><img :src="imageUrl" alt="" /></a>
    <section>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </section>
  </div>
</template>

<script>

export default {
  name: 'VideoResult',
  props: {
    video: Object,
  },
  computed: {
    imageUrl() {
      return this.video.imageUrl;
    },
    title() {
      return this.video.title;
    },
    description() {
      return this.video.description;
    },
    linkUrl() {
      return this.video.linkUrl;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_colors.scss";
@import "@/styles/_sizes.scss";
@import "@/styles/_typography.scss";

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
</style>
