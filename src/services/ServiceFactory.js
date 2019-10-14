import UsersService from './UsersService';

const usersService = new UsersService();

const services = {
    users: usersService,
};

export const ServiceFactory = {
    get: name => services[name]
};