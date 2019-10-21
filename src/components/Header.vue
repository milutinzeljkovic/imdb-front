<template>
  <div>
    <v-toolbar
      dark
      prominent
      src="https://static.amazon.jobs/teams/53/images/IMDb_Header_Page.jpg?1501027252"
    >  
      <v-app-bar-nav-icon @click="showDrawer =  !showDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title>

      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon v-if="user!== null" @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="showDrawer" app  disable-resize-watcher>
            <v-icon @click="showDrawer =  !showDrawer">mdi-close</v-icon>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">
                    Pocket imdb
                </v-list-item-title>
                <v-list-item-subtitle>
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
          v-if="user !== null"
          link
          
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          :to="{path: item.path}"
          v-for="item in loginItems"
          :key="item.title"
          v-if="user === null"
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
            { title: 'Movies', icon: 'mdi-movie', path: '/movies'},
            { title: 'Add movie', icon: 'mdi-plus', path: '/movies/add'},
            ],
            loginItems:[
              { title: 'Login', icon: 'mdi-login', path: '/login' },
              { title: 'Register', icon: 'mdi-login', path: '/register'},
            ],
            right: null,
            routeNames,
            genre: null
        }
    },
    methods:{
      ...mapActions(['fetchGenres','fetchMovies','searchMovies','fetchCurrentUser','logoutUser']),
      async filterMovies(){
        try{
          await this.fetchMovies(this.genre);
        }catch(e){
          this.$route.push('/login');
        }
      },   
      logout(){
        this.logoutUser();
        this.$router.push('/login');
        
      },  
      searchCaller(){
        this.searchMovies(this.searchTerm.toLowerCase());
      }


    },
    computed: mapGetters(['allGenres','user']),
    created() {
      this.fetchCurrentUser();
      this.fetchGenres();
      this.searchCaller = _.debounce(this.searchCaller, 500);
    }


}
</script>

<style scoped>
.search-div{
  margin-top:10%;
}
</style>