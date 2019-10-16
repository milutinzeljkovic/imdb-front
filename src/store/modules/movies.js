import { ServiceFactory } from '../../services/ServiceFactory';
import MoviesService from '../../services/MoviesService';
const moviesService = ServiceFactory.get('movies');

const state = {
    movies: []
};

const getters = {
    allMovies: state => state.movies,
};

const actions = {
    async fetchMovies({ commit },genre) {   

        const response = await moviesService.get(genre);
        commit('setMovies', response.data);
    },
    async addMovie({ commit },movie) {        
        const response = await moviesService.createMovie(movie);
    }
};

const mutations = {
    setMovies: (state, movies) => {     
        console.log('seting movies', movies);
           
        state.movies = movies
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}