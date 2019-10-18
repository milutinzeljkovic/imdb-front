<template>
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
    <v-btn @click="clear">clear</v-btn>
  </form>
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
      genres: allGenres
    }),
    methods:{
        ...mapActions(['fetchGenres','addMovie']),
        clear () {
            this.$v.$reset()
            this.title = ''
            this.description = ''
            this.select = null
            this.image = ''
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

      }
    },
    computed: mapGetters(['allGenres']),
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