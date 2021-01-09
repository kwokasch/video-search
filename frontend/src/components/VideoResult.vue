<template>
   <div class="video-result">
    <a :href="video.linkUrl"><img :src="video.imageUrl" alt=""></a>
    <section>
      <h2>{{ video.title }}</h2>
      <p>{{ video.description }}</p>
    </section>
  </div>
</template>

<script>

export default {
  name: 'VideoResult',
  props: {
    video: Object,
  },
};
</script>

<style lang="scss">
</style>
