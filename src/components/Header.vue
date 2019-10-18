<template>
  <div>
    <v-toolbar
      dark
      prominent
      src="https://static.amazon.jobs/teams/53/images/IMDb_Header_Page.jpg?1501027252"
    >  
      <v-app-bar-nav-icon @click="showDrawer =  !showDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Pocket</v-toolbar-title>

      <v-spacer></v-spacer>



    <div class = 'search-div'>
      <v-text-field
        hide-details
        v-on:input="searchCaller"
        v-model="searchTerm"
        single-line
      ></v-text-field>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </div>
      

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="showDrawer" app  disable-resize-watcher>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">
                    Application
                </v-list-item-title>
                <v-list-item-subtitle>
                    subtext
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

      <v-divider></v-divider>
        <v-list
        dense
        nav
      >
      
        <v-list-item
        :to="{path: item.path}"
          v-for="item in items"
          :key="item.title"
          link
          
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

        <v-select
          v-model="genre"
          :items="allGenres" item-value="name" item-text="name"
          label="Filter movies"
          @input="filterMovies"
          required
        ></v-select>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import routeNames from '../router/router-names';
import _ from 'lodash'


export default {
    name: 'Header',
    data(){
        return{
            showDrawer: false,
            searchTerm:'',
            items: [
            { title: 'Movies', icon: 'mdi-view-dashboard', path: '/movies'},
            { title: 'Login', icon: 'mdi-login', path: '/login' },
            { title: 'Register', icon: 'mdi-login', path: '/register'},
            { title: 'Add movie', icon: 'mdi-login', path: '/movies/add'}
            ],
            right: null,
            routeNames,
            genre: null
        }
    },
    methods:{
      ...mapActions(['fetchGenres','fetchMovies','searchMovies']),
      async filterMovies(){
        try{
          await this.fetchMovies(this.genre);
        }catch(e){
          this.$route.push('/login');
        }
      },      
      searchCaller(){
        this.searchMovies(this.searchTerm);
      }


    },
    computed: mapGetters(['allGenres','user']),
    created() {
      this.fetchGenres();
      this.searchCaller = _.debounce(this.searchCaller, 500);
    }


}
</script>

<style scoped>
.search-div{
  display: inline;
}
</style>