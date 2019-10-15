import UsersService from './UsersService';
import MoviesService from './MoviesService';

const usersService = new UsersService();
const moviesService = new MoviesService();

const services = {
    users: usersService,
    movies: moviesService
};

export const ServiceFactory = {
    get: name => services[name]
};