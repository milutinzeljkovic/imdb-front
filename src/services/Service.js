import axios from 'axios';

const baseDomain = 'http://localhost:8000';
const baseURL = `${baseDomain}/api`;
const omdbURL = 'http://www.omdbapi.com/?apikey=c7e52b30';

class Service {
    constructor(){
        this.client = axios.create({
            baseURL
        })
        this.omdbClient = axios.create({
            omdbURL
        })

        this.setInterceptor();
    }
    setInterceptor = () => {
        this.client.interceptors.request.use(config => {        
        const token = window.localStorage.getItem("token");
    
        if (!!token) {
            Object.assign(config.headers, {
                Authorization: `Bearer ${token}`
            });
        }

        return config;
        });
      };
    
    attachHeaders(headers) {
        Object.assign(this.client.defaults.headers, headers);
    }

    detachHeader(headerKey) {
        delete this.client.defaults.headers[headerKey];
    }

    getOmdbCient() {    
        //ovo ne radi, vrati localhost umesto omdb    
        return this.omdbClient;
    }


    getApiClient() {
        return this.client;
    }
}

export default Service;