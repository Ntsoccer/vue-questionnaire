import Vue from 'vue'
import VueRouter from 'vue-router'
import Customer from '../views/Customer.vue'
import Questionnaire from '../views/Questionnaire.vue'
import Consultation from '../views/Consultation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/customer',
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
