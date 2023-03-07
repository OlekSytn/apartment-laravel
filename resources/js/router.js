import Vue from 'vue'
import router from 'vue-router'
Vue.use(router);
let Router = new router({
    // mode: 'history',
    routes: [

        {
            path: '/project',
            name: 'Project',
            component: ()=> import('./components/Projects'),
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: ()=> import('./components/Dashboard'),
        }
    ]
})
export default Router;
