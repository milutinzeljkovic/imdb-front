<template>

  <v-card 
    class=" pa-1"
    max-width="900"

  >

    <v-card-title>
   <h4
    :to="{path: `/movies/${movie.id}`}"
          link   
   >     <v-list-item
        :to="{path: `/movies/${movie.id}`}"
          link   
      >{{movie.title}} </v-list-item></h4>
  </v-card-title>
      



    <v-img
      class="white--text align-start"
      max-width="200px"
      max-height="300px"
      :src="movie.image_url"
    >
    </v-img>
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