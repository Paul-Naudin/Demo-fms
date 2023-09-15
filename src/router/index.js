import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import DataBindingView from '../views/DataBindingView.vue'
import EventsView from '../views/EventsView.vue'
import ComponentsCommunicationView from '../views/ComponentsCommunicationView.vue'
import VuexView from '../views/VuexView.vue'

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
      path: '/componentscommunication',
      name: 'Communication entre composants',
      component: ComponentsCommunicationView
    }, {
      path: '/vuex',
      name: 'Vuex',
      component: VuexView
    }, {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' }
    }
  ]
})

export default router
