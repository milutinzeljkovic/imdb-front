<template>
  <v-card 
    class=" pa-5"
    max-width="900"
    id='card'
  >
  <form  class = 'add-movie-form'>
    <v-text-field
      v-model="title"
      label="Title"
      required
    ></v-text-field>
    <v-select
      v-model="genre"
      :items="genres" item-value="id" item-text="name"
      :selected="selectedGenre"
      label="Genre"
      required
    ></v-select>
    <v-text-field
      v-model="image"
      label="Image url"
      required
    ></v-text-field>
        <v-textarea
          name="input-7-1"
          label="Description"
          v-model="description"
          hint="Movie description"
        ></v-textarea>
    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn class="mr-4" @click="sumbitOMDB">OMDB</v-btn>
  </form>
  </v-card>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'AddMovie',
    data(){
      return {
        title: '',
        genre: null,
        description: '',
        image: '',
        checkbox: false,
        selectedGenre: 0
      }
    },
    methods:{
        ...mapActions(['fetchGenres','addMovie','fetchMovieFromOMDB']),
        clear () {
            this.title = ''
            this.description = ''
            this.select = null
            this.image = ''

      },
      async setData(movie){        
        movie.genre = movie.genre.split(',')[0].toLowerCase();
        //mapiranje zanra sa omdb na id koji se cuva u bazi
        this.genres.map(el => {                    
          if(el.name === movie.genre){            
            movie.genre_id = el.id;
          }
        }
        )
        this.genre = movie.genre_id,
        this.title = movie.title;
        this.description = movie.description;
        this.select = movie.genre_id;
        this.image = movie.image_url;
               
      },
      async submit () {
        const movieObj = {
          title: this.title,
          description: this.description,
          image_url: this.image,
          genre_id: this.genre
        }
        await this.addMovie(movieObj);
        this.$router.push('/movies');

      },
      async sumbitOMDB(){
        await this.fetchMovieFromOMDB(this.title);
        this.setData(this.omdbMovie);
      }
    },
    computed: {
      ...mapGetters({
        genres: 'allGenres',
        omdbMovie: 'getOmdbMovie'
      }),
    },
    created() {
      this.fetchGenres();
    }
    
}
</script>
<style scoped>
 .add-movie-form{
     width: 70%;
     margin-left: 20%;
 }
         #card{
      width: 70%;
        margin-left: 15%;
    }

  @media (max-width: 500px) {
      .add-movie-form{
      width: 90%;
      margin-left: 5%;

  }
  #card{
      width: 96%;
      margin-left: 2%;
    }
  }

</style>