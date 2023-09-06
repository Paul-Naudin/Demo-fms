import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import DataBindingView from '../views/DataBindingView.vue'
import EventsView from '../views/EventsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    }, {
      path: '/databinding',
      name: 'databinding',
      component: DataBindingView
    }, {
      path: '/events',
      name: 'events',
      component: EventsView
    }, {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' }
    }
  ]
})

export default router
