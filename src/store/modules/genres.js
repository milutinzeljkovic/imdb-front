import { ServiceFactory } from '../../services/ServiceFactory';
const genresService = ServiceFactory.get('genres');

const state = {
    genres: []
};

const getters = {
    allGenres: state => state.genres,
};

const actions = {
    async fetchGenres({ commit }) {        
        const response = await genresService.get();
        commit('setGenres', response.data);
    }
};

const mutations = {
    setGenres: (state, genres) => {                
        state.genres = genres
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}