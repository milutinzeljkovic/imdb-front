<template>
  <v-app>
    <Header/>
    <router-view/>
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
