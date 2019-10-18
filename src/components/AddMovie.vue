<template>
  <v-card 
    class=" pa-5"
    max-width="900"

  >
  <form  class = 'add-movie-form'>
    <v-text-field
      v-model="title"
      label="Title"
      required
    ></v-text-field>
    <v-select
      v-model="genre"
      :items="allGenres" item-value="id" item-text="name"
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
    <v-btn @click="clear">clear</v-btn>
  </form>
  </v-card>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { log } from 'util'

export default {
    name: 'AddMovie',
    data: () => ({
      title: '',
      genre: null,
      image:'',
      description: '',
      image: '',
      checkbox: false,
      genres: allGenres,
      omdbMovie: getOmdbMovie
    }),
    methods:{
        ...mapActions(['fetchGenres','addMovie','fetchMovieFromOMDB']),
        clear () {
            this.title = ''
            this.description = 'asdsadas'
            this.select = null
            this.image = ''
      },
      async setData(movie){
        movie.genre = movie.genre.split(',')[0].toLowerCase();

        //mapiranje zanra sa omdb na id koji se cuva u bazi
        this.allGenres.map(el => {                    
          if(el.name === movie.genre){            
            movie.genre_id = el.id;
          }
        }
        )        
        await this.addMovie(movie);
        this.$router.push('/movies');
               
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
        this.setData(this.getOmdbMovie);
      }
    },
    computed: mapGetters(['allGenres','getOmdbMovie']),
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
</style>