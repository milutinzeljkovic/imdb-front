<template>
<div>
<div v-if="allMovies !== undefined">
<v-container dark class="grey darken-4">
    <v-card >
      <div id='filter-div'>
          <v-select
          id='select'
          v-model="genre"
          :items="allGenres" item-value="name" item-text="name"
          label="Filter movies"
          @input="filterMovies"
          required
        ></v-select>
        <v-text-field
        hide-details
        v-on:input="searchCaller"
        v-model="searchTerm"
        single-line
      ></v-text-field>
      </div>
    </v-card>

    <v-row class="grey darken-4">
      <v-col
      class="grey darken-4"
        cols="12"
        md="8"
      >
        
          <v-row no-gutters
            class="grey darken-4"
          >
            <v-col
            class="grey darken-4"
              v-for="movie in allMovies"
              :key="movie.id"
              cols="12"
              sm="12"
            >
           <v-card
          class="pa-1 grey darken-4"
          outlined
          tile
        >


                <MovieCard :movie="movie"/>
                        </v-card>

            </v-col>
            <v-col>
              col
            </v-col>
          </v-row>
          
      </v-col>
      <v-col
        cols="6"
        md="4"
      >
      </v-col>
    </v-row>
</v-container>
 <v-footer>
   
    <v-spacer></v-spacer>

    <div>
      <v-icon>mdi-arrow-left</v-icon>
      <v-icon>mdi-arrow-right</v-icon>

      &copy; {{ new Date().getFullYear() }}
      
      </div>
  </v-footer>

</div>
<div v-else>

</div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'

import MovieCard from './MovieCard';


export default {
    name: 'Movies',
    components:{
      MovieCard
    },
    data(){
      return{
        searchTerm:'',
      }

    },
    methods:{
      ...mapActions(['fetchMovies','searchMovies']),
      async getMovies() {
        try{
          await this.fetchMovies();
        }catch(e){
          this.$router.push('/login');
        }

      },
      async filterMovies(){
        try{
          await this.fetchMovies(this.genre);
        }catch(e){
          this.$route.push('/login');
        }
      }, 
      searchCaller(){
        this.searchMovies(this.searchTerm.toLowerCase());
      }
    },
    computed: mapGetters(['allMovies','allGenres',]),
    created() {
      this.getMovies();
      this.searchCaller = _.debounce(this.searchCaller, 500);

    }

}
</script>

<style scoped>
.grey.lighten-5{
  width: 100%;
}
#filter-div{
  display: inline;
}
#select{
  width: 50%;
}
    @media (max-width: 500px) {
        .grey.lighten-5{
        width: 100%;
        margin-left: 0%;

    }
  }


</style>