import Service from './Service';

const resource = '/movies';

class MoviesService extends Service{
    get(genre,page) {        
        
        if(genre!== undefined){
            return this.getApiClient().get(`${resource}?genre=${genre}&page=1`);
        }
        else
            return this.getApiClient().get(`${resource}?page=1`);
    }
    getByTitle(title) {
        return this.getApiClient().get(`${resource}?title=${title}`);
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
    getMovieOMDB(title) {
        //ovde umesto omdb client uzme obican api client   
        return this.getOmdbCient().get(`&?t=${title}`);
    }
}

export default MoviesService;

