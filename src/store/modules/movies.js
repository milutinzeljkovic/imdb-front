import { ServiceFactory } from '../../services/ServiceFactory';
const moviesService = ServiceFactory.get('movies');

const state = {
    movies: []
};

const getters = {
    allMovies: state => state.movies,
};

const actions = {
    async fetchMovies({ commit }) {        
        const response = await moviesService.get();
        commit('setMovies', response.data.data);
    }
};

const mutations = {
    
    setMovies: (state, movies) => {        
        state.movies = movies
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}