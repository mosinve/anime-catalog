<template lang="pug">
b-container
  b-row
    b-col
      app-logo
      h1.title anime-catalog
      h2.subtitle Nuxt.js demo project
  b-row
    b-card-group(columns)
      b-card(v-for  = "film in films"
            :key    = "film.id"
            :header = "film.attributes.canonicalTitle"
            header-bg-variant = "warning")
        b-img(:src = "film.attributes.posterImage && film.attributes.posterImage.small"
              thumbnail)
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import { mapState } from 'vuex'
export default {
  components: {
    AppLogo
  },

  async fetch({ store }) {
    await store.dispatch('films/getFilms')
  },

  computed: {
    ...mapState('films', {films: 'list'})
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  /*display: flex;*/
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
