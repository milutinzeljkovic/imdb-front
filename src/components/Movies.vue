<template>
<div>
<div v-if="allMovies !== undefined">
<v-container dark class="grey lighten-5">
    <v-row>
      <v-col
        cols="12"
        md="8"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
        <v-container class="grey lighten-5">
          <v-row no-gutters>
            <v-col
              v-for="movie in allMovies"
              :key="movie.id"
              cols="12"
              sm="12"
            >
              <v-card
                class="pa-2"
                tile
              >
                <MovieCard :movie="movie"/>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
          
        </v-card>
      </v-col>
      <v-col
        cols="6"
        md="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          .col-6 .col-md-4
        </v-card>
      </v-col>
    </v-row>
</v-container>

</div>
<div v-else>

</div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MovieCard from './MovieCard';


export default {
    name: 'Movies',
    components:{
      MovieCard
    },
    methods:{
      ...mapActions(['fetchMovies']),
      async getMovies() {
        try{
          await this.fetchMovies();
        }catch(e){
          this.$router.push('/login');
        }

      }
    },
    computed: mapGetters(['allMovies']),
    created() {
      this.getMovies();
    }

}
</script>

<style scoped>
.grey.lighten-5{
  width: 100%;
}

    @media (max-width: 500px) {
        .grey.lighten-5{
        width: 100%;
        margin-left: 0%;

    }
  }


</style>