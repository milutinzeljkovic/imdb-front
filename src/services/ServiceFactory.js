import UsersService from './UsersService';
import MoviesService from './MoviesService';
import GenresSerivce from './GenresService';
import ReactionsService from './ReactionsService';

const usersService = new UsersService();
const moviesService = new MoviesService();
const genresService = new GenresSerivce();
const reactionsService = new ReactionsService();

const services = {
    users: usersService,
    movies: moviesService,
    genres: genresService,
    reactions: reactionsService

};

export const ServiceFactory = {
    get: name => services[name]
};