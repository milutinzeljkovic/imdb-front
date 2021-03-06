import Service from './Service';

const resource = '/movies';

class MoviesService extends Service{
    get(genre) {
        if(genre!== undefined){
            return this.getApiClient().get(`${resource}?genre=${genre}`);
        }
        else
            return this.getApiClient().get(`${resource}`);
    }
    getMovie(movieId) {
        return this.getApiClient().get(`${resource}/${movieId}`);
    }
    createMovie(movie) {
        return this.getApiClient().post(`${resource}/add`, movie);
    }
    updateMovie(movie) {
        return this.getApiClient().put(`${resource}/${movie.id}`,movie);
    }
    deleteMovie(id) {
        return this.getApiClient().delete(`${resource}/${id}`);
    }
}

export default MoviesService;

