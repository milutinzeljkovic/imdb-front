import Service from './Service';

const resource = '/genres';

class GenresService extends Service{
    get() {
        return this.getApiClient().get(`${resource}`);
    }
}

export default GenresService;

