import Vuex from 'vuex';
import Vue from 'vue';
import users from './modules/users';
import movies from './modules/movies';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        users,
        movies
    }
})
