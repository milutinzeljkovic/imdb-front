import Service from './Service';

const resource = '/movies';

class MoviesService extends Service{
    get() {
        return this.getApiClient().get(`${resource}`);
    }
    getTodo(movieId) {
        return this.getApiClient().get(`${resource}/${movieId}`);
    }
    createTodo(movie) {
        return this.getApiClient().post(`${resource}/add`, movie);
    }
    updateTodo(movie) {
        return this.getApiClient().put(`${resource}/${movie.id}`,movie);
    }
    deleteTodo(id) {
        return this.getApiClient().delete(`${resource}/${id}`);
    }
}

export default TodosRepository;

