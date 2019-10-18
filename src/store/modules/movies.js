import axios from 'axios';
import { ServiceFactory } from '../../services/ServiceFactory';
const moviesService = ServiceFactory.get('movies');

const state = {
    movies: [],
    activeMovie: {},
    omdbMovie: {},
    nextPage: 0,
    previousPage: 0
};

const getters = {
    allMovies: state => state.movies,
    getActiveMovie: state => state.activeMovie,
    getOmdbMovie: state => state.omdbMovie,
    nextPage: state => state.nextPage,
    previousPage: state => state.previousPage
};

const actions = {
    async fetchMovies({ commit },genre) {   
        const response = await moviesService.get(genre,state.nextPage);        
        commit('setMovies', response.data);
      //  commit('setPages',response.data);
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
    //nece kad se odvoji u movieService
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
        
    },
    setPages: (state,data) => {
        //data.current_page
        //data.last_page
        console.log(data.current_page,' ',data.last_page);
        if(data.current_page === data.last_page){
            state.nextPage = null;
        }
        else{            
            state.nextPage = data.current_page+1;
        }
        if(data.current_page === 1){
            state.previousPage = null;
        }
        else{
            state.previousPage =data.current_page-1;
        }        

        console.log(state.nextPage,' ',state.previousPage);

    }
};

export default{
    state,
    getters,
    actions,
    mutations
}