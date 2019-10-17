<template>
  <v-card
    class="mx-auto"
    max-width="900"
  >
  <v-list-item
        :to="{path: `/movies/${movie.id}`}"
          link   
      >
    <v-img
      class="white--text align-start"
      width="200px"
      max-height="300px"
      :src="movie.image_url"
    >
    </v-img>

    <v-card-text class="text--primary">
      <div><h2>{{movie.title}}</h2></div>
    </v-card-text>
    </v-list-item>
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