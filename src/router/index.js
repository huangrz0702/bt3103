import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Promotion from '../views/Promotion.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Food from '../views/Food.vue'
import Profile from '../views/Profile.vue'
import Restaurant from '../views/Restaurant.vue'
import Preference from '../views/Preference.vue'
import Hist from '../views/Hist.vue'


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
        path: '/Restaurant',
        name: 'Restaurant',
        component: Restaurant
    } , {
        path: '/Profile',
        name: 'Profile',
        component: Profile
    } , {
        path: '/Preference',
        name: 'Preference',
        component: Preference
    } , {
        path: '/Hist',
        name: 'Hist',
        component: Hist
    }  , {
        path: '/Promotion',
        name: 'Promotion',
        component: Promotion
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router