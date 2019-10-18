<template>
  <v-app>
    <Header/>
    <div class="grey darken-4">
        <router-view/>
    </div>

  </v-app>
</template>

<script>
import Header from './components/Header';
import Register from './components/Register';

export default {
  name: 'App',
  components: {
    Header,
    Register
  },
  data: () => ({
  }),
};
</script>
