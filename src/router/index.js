import Inicio from "../views/web/Inicio.vue"
import Acerca from "../views/web/Acerca.vue"
import Login from "../views/auth/Login.vue"
import Registro from "../views/auth/Register.vue"
import Perfil from "../views/admin/perfil/Perfil.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {path: '/', component: Inicio},
    {path: '/nosotros', component: Acerca},
    {path: '/auth/login', component: Login},
    {path: '/auth/register', component: Registro},
    {path: '/admin/perfil', component: Perfil},

];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;