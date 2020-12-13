<template>
  <div id="the-app">
    <h1>Video Search</h1>
    <form class="search-form">
      <input placeholder="Search for a video">
      <font-awesome-icon icon="search" />
    </form>
    <ul>
      <li>
        <div class="video-result">
          <a href="#"><img src="images/math-rock.png" alt=""></a>
          <section>
            <h2>5 Awesome FACGCE Riffs - Covet, TTNG, American Football, Colossal</h2>
            <p>
              Hello, Steve here, hope you're doing well. In this video, I show you 5 riffs
              in FACGCE tuning. A question I get asked quite often is what is the best way
              to learn how to play in other tunings. I think a great way to start is to
              learn other songs or parts of songs in different tunings, this way you will
              get some insight into how to possibly play, techniques you can use, where chords
              are, nice sounding notes and so on.
            </p>
          </section>
        </div>
      </li>
      <li>
        <div class="video-result">
          <a href="#"><img src="images/nathan-fielder.png" alt=""></a>
          <section>
            <h2>Can the Emmys be Hacked?</h2>
            <p>
              Nathan Fielder reveals potential vulnerabilities in the Emmy online voting system
              with election security expert Carsten Schürmann.
            </p>
          </section>
        </div>
      </li>
      <li>
        <div class="video-result">
          <a href="#"><img src="images/pwas.png" alt=""></a>
          <section>
            <h2>Progressive Web Apps Are The Future</h2>
            <p>
              Get the lowdown on Progressive Web Apps – why PWAs are the freshest way to reach more
              users and create richer user experiences and engagement.
            </p>
          </section>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'App',
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss">
</style>
