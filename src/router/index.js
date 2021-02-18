import Vue from 'vue'
import VueRouter from 'vue-router'
import Customer from '../views/Customer.vue'
import Questionnaire from '../views/Questionnaire.vue'
import Consultation from '../views/Consultation.vue'
import Confirmation from '../views/Confirmation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Customer',
    component: Customer
  },
  {
    path: '/questionnaire',
    name: 'Questionnaire',
    component: Questionnaire
  },
  {
    path: '/consultation',
    name: 'Consultation',
    component: Consultation
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    component: Confirmation
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
