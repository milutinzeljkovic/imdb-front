import Vue from 'vue';
import Router from 'vue-router';
import Register from '../components/Register';
import Login from '../components/Login';
import AddMovie from '../components/AddMovie';
import Movies from '../components/Movies';
import MoviePage from '../components/MoviePage';
import routes from './router-names'; 
Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
      {
        path: routes.REGISTER_ROUTE.path,
        name: routes.REGISTER_ROUTE.name,
        component: Register,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: routes.MOVIE_ROUTE.path,
        name: routes.MOVIE_ROUTE.name,
        component: Movies,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: routes.LOGIN_ROUTE.path,
        name: routes.LOGIN_ROUTE.name,
        component: Login,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: routes.MOVIE_ROUTE_ADD.path,
        name: routes.MOVIE_ROUTE_ADD.name,
        component: AddMovie,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: routes.SINGLE_MOVIE_PAGE.path,
        name: routes.SINGLE_MOVIE_PAGE.name,
        component: MoviePage,
        meta: {
          requiresAuth: true
        }
      }
    ]
  })

  router.beforeEach((to, from, next) => {

    if(!localStorage.getItem('token') && to.meta.requiresAuth)
      next('/login');
    else
      next();
    
  })

  export default router;