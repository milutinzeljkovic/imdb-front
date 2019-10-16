import UsersService from './UsersService';
import MoviesService from './MoviesService';
import GenresSerivce from './GenresService';

const usersService = new UsersService();
const moviesService = new MoviesService();
const genresService = new GenresSerivce();

const services = {
    users: usersService,
    movies: moviesService,
    genres: genresService

};

export const ServiceFactory = {
    get: name => services[name]
};