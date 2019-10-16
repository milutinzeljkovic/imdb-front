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
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import routeNames from '../router/router-names';

export default {
    name: 'Header',
    data(){
        return{
            showDrawer: false,
            items: [
            { title: 'Movies', icon: 'mdi-view-dashboard', path: '/movies'},
            { title: 'Login', icon: 'mdi-login', path: '/login' },
            { title: 'Register', icon: 'mdi-login', path: '/register'},
            { title: 'Add movie', icon: 'mdi-login', path: '/movies/add'}
            ],
            right: null,
            routeNames
        }
    }

}
</script>

<style scoped>

</style>