import Inicio from "../views/web/Inicio.vue"
import Acerca from "../views/web/Acerca.vue"
import Login from "../views/auth/Login.vue"
import Registro from "../views/auth/Register.vue"
import Perfil from "../views/admin/perfil/Perfil.vue"
import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {path: '/', component: Inicio, name: 'Inicio', meta:{requireAuth: true}},
    {path: '/nosotros', component: Acerca, name: 'Nosotros'},
    {path: '/auth/login', component: Login, name: 'Login', meta: {redirectIfAuth: true}},
    {path: '/auth/register', component: Registro, name: 'Registro'},
    {path: '/admin/perfil', component: Perfil, name: 'Perfil', meta:{requireAuth: true}},

];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

// Guards
router.beforeEach((to, from, next)=>{
    //console.log(to)
    const token = localStorage.getItem("access_token") || null;
    if (to.meta.requireAuth){
if(!token){
    return next({name: 'Login'})
}
return next()
    }
    if (to.meta.redirectIfAuth && token){
        return next({name: 'Perfil'})
    }
return next()
});

export default router;