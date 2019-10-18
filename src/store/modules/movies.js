import axios from 'axios';
import { ServiceFactory } from '../../services/ServiceFactory';
const moviesService = ServiceFactory.get('movies');

const state = {
    movies: [],
    activeMovie: {},
    omdbMovie: {}
};

const getters = {
    allMovies: state => state.movies,
    getActiveMovie: state => state.activeMovie,
    getOmdbMovie: state => state.omdbMovie
};

const actions = {
    async fetchMovies({ commit },genre) {   
        const response = await moviesService.get(genre);
        commit('setMovies', response.data);
    },
    async searchMovies({ commit}, title){
        const response = await moviesService.getByTitle(title);        
        commit('setMovies', response.data);
    },
    async addMovie({ commit },movie) {        
        await moviesService.createMovie(movie);
    },
    async getMovie({ commit },movieId) {
        const response = await moviesService.getMovie(movieId);        
        commit('setActiveMovie',response.data[0]);
    },
    async addMovieFromOMDB({ commit },movie) {

    },
    async fetchMovieFromOMDB({ commit },title){
        const response = await axios.get(`http://www.omdbapi.com/?apikey=c7e52b30&t=${title}`);
        commit('setOmdbMovie',response.data);

        
    }   

};

const mutations = {
    setMovies: (state, movies) => {                
        state.movies = movies
    },
    setActiveMovie: (state, movie) => {        
        state.activeMovie = movie;        
    },
    setOmdbMovie: (state,movie) => {
        state.omdbMovie = {
            title: movie.Title,
            description: movie.Plot,
            genre: movie.Genre,
            image_url: movie.Poster
        }
        
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}