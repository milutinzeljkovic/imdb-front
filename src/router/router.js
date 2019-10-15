import Vue from 'vue';
import Router from 'vue-router';
import Register from '../components/Register';
import Login from '../components/Login';
import Movies from '../components/Movies';
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