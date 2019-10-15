<template>
  <v-card
    class="mx-auto"
    max-width="900"
  >
    <v-img
      class="white--text align-start"
      height="200px"
      :src="movie.image_url"
    >
    </v-img>

    <v-card-title>{{movie.title}}</v-card-title>

    <v-card-text class="text--primary">
      <div>{{movie.description}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props:['movie'],
    name: 'MovieCard'
}
</script>

<style scoped>

</style>