<template>
  <div class="grey darken-4">
  <v-app>
    <Header/>
    <div class="grey darken-4">
        <router-view/>
    </div>

  </v-app>
</div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header
  },
  data: () => ({
  }),
};
</script>

<style>
 

</style>