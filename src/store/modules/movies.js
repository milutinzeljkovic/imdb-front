import { ServiceFactory } from '../../services/ServiceFactory';
const moviesService = ServiceFactory.get('movies');

const state = {
    movies: [],
    activeMovie: {}
};

const getters = {
    allMovies: state => state.movies,
    getActiveMovie: state => state.activeMovie
};

const actions = {
    async fetchMovies({ commit },genre) {   
        const response = await moviesService.get(genre);
        commit('setMovies', response.data);
    },
    async addMovie({ commit },movie) {        
        await moviesService.createMovie(movie);
    },
    async getMovie({ commit },movieId) {
        const response = await moviesService.getMovie(movieId);        
        commit('setActiveMovie',response.data[0]);
    }
};

const mutations = {
    setMovies: (state, movies) => {                
        state.movies = movies
    },
    setActiveMovie: (state, movie) => {        
        state.activeMovie = movie;        
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}