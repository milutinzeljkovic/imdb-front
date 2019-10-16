import Vuex from 'vuex';
import Vue from 'vue';
import users from './modules/users';
import movies from './modules/movies';
import genres from './modules/genres';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        users,
        movies,
        genres
    }
})
