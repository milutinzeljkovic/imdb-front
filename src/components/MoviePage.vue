<template>
<v-container dark class="grey lighten-5">
    <v-row>
      <v-col
        cols="12"
        sm="8"
      >
        <v-card class="d-inline-block mx-auto">
    <v-container>
      <v-row
            class="flex-column ma-0 fill-height"
            justify="center"
    >
          <h1>{{getActiveMovie.title}}</h1>
          <small>{{getActiveMovie.genre.name}}</small>
          <p>{{getActiveMovie.description}}</p>
        <v-row
            flex-flow  
        >
         <v-row
            class="flex-column ma-0 fill-height"
            justify="center"
            id='like_div'
          >
          <v-btn icon v-if="getMyReaction ===1" disabled>
                <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon v-else @click="addReaction(1)">
                <v-icon>mdi-heart</v-icon>
          </v-btn>
        <small>{{allLikes}}</small>
         </v-row>
         <v-row
            class="flex-column ma-0 fill-height"
            justify="center"
            id='dislike_div'

          >
          <v-btn icon v-if="getMyReaction ===2" disabled>
            <v-icon> mdi-heart-broken</v-icon>
          </v-btn>
          <v-btn icon v-else @click="addReaction(2)">
                <v-icon> mdi-heart-broken</v-icon>
          </v-btn>
        <small>{{allDislikes}}</small>
         </v-row>
        </v-row>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="auto">
        
          <v-img
            height="300"
            width="300"
            :src="getActiveMovie.image_url"
          ></v-img>
        </v-col>

        <v-col
          cols="auto"
          class="text-center pl-0"
        >
        </v-col>
      </v-row>
    </v-container>
  </v-card>
      </v-col>
      <v-col
        cols="6"
        sm="4"
      >
        <v-container class='description_container'>
        </v-container>
        
    
      </v-col>
    </v-row>
</v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
    name: 'MoviePage',
    methods:{
      ...mapActions(['fetchReactions', 'fetchMyReaction','postReaction','getMovie']),
      async getReactions() {
        await this.fetchReactions(this.$route.params.id);
      },
      addReaction(reaction){
        const obje = {
          movie_id: this.$route.params.id,
          reaction_id:reaction
        }
        this.postReaction(obje);      
      }
    },
    
computed: mapGetters(['allReactions','allLikes','allDislikes','getMyReaction','getActiveMovie']),
created() {  
  this.getReactions();
  this.fetchMyReaction(this.$route.params.id);
  this.getMovie(this.$route.params.id);
}
}
</script>

<style scoped>
    #like_div{
        max-width: 15%;
        margin-left: 5%;
    }


</style>