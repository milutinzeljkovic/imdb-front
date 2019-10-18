import Service from './Service';

const resource = '/reactions';

class ReactionsService extends Service{
    getReactions(movieId) {        
        return this.getApiClient().get(`${resource}/count?movie=${movieId}`);
    }
    addReaction(reaction) {        
        return this.getApiClient().post(`${resource}`, reaction);
    }
    myReaction(movieId) {
        return this.getApiClient().get(`${resource}/me?movie=${movieId}`);
    }
}

export default ReactionsService;

