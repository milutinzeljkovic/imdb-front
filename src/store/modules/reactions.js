import { ServiceFactory } from '../../services/ServiceFactory';
const reactionsService = ServiceFactory.get('reactions');

const state = {
    reactions: {},
    likes: 0,
    dislikes: 0,
    myReaction: null
};

const getters = {
    allReactions: state => state.reactions,
    allLikes: state => state.likes,
    allDislikes: state => state.dislikes,
    getMyReaction: state => state.myReaction
};

const actions = {
    async fetchReactions({ commit },movieId) {           
        const response = await reactionsService.getReactions(movieId);
        commit('setReactions', response.data);
    },

    async fetchMyReaction({commit},movieId) {
        const response = await reactionsService.myReaction(movieId);
        commit('setMyReaction',response.data);
    },

    async postReaction({commit},reaction) {
        
        const response = await reactionsService.addReaction(reaction);
        const data = {
            reactions: response.data,
            myReaction: reaction.reaction_id
        }
        commit('updateReaction',data);
    }
};

const mutations = {
    setReactions: (state, reactions) => {     
        state.likes = reactions[1] === undefined ? 0 : reactions[1].length;        
        state.dislikes = reactions[2] === undefined ? 0 : reactions[2].length;
        state.reactions = reactions
    },
    setMyReaction: (state,reaction) => {
        state.myReaction = reaction[0] === undefined ? {} : reaction[0].reaction;
    },
    updateReaction: (state,data) => {
        state.myReaction = data.myReaction;
        state.likes = data.reactions[1] === undefined ? 0 : data.reactions[1].length;        
        state.dislikes = data.reactions[2] === undefined ? 0 : data.reactions[2].length;
        state.reactions = data.reactions;
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}