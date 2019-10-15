<template>
  <form  class = 'add-movie-form'>
    <v-text-field
      v-model="title"
      label="Title"
      required
    ></v-text-field>
    <v-select
      v-model="genre"
      :items="items"
      label="Genre"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
    <v-text-field
      v-model="image"
      label="Image url"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
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
export default {
    name: 'AddMovie',
    data: () => ({
      title: '',
      genre: null,
      image:'',
      description: '',
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      image: '',
      checkbox: false,
    }),
    methods:{
        clear () {
            this.$v.$reset()
            this.title = ''
            this.description = ''
            this.select = null
            this.image = ''
      },
        submit () {
                        
        }
    }
    
}
</script>
<style scoped>
 .add-movie-form{
     width: 70%;
     margin-left: 20%;
 }
</style>