import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Food from '../views/Food.vue'
import Profile from '../views/Profile.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/Login',
        name: 'Login',
        component: Login
    } , {
        path: '/Register',
        name: 'Register',
        component: Register
    } , {
        path: '/Food',
        name: 'Food',
        component: Food
    } , {
        path: '/Profile',
        name: 'Profile',
        component: Profile
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router