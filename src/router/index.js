import { createRouter, createWebHistory } from 'vue-router'
import RequesterDashboardView from '../views/RequesterDashboardView.vue';
import RequesterTicketView from '../views/RequesterTicketView.vue';
import ResponderDashboardView from '../views/ResponderDashboardView.vue';
import ResponderTicketView from '../views/ResponderTicketView.vue';
import App from '../App.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'app',
      component: App
    },
    {
      path: '/requesterdashboard',
      name: 'requesterdashboard',
      component: RequesterDashboardView
    },
    {
      path: '/requesterticket',
      name: 'requesterticket',
      component: RequesterTicketView
    },
    {
      path: '/responderticket',
      name: 'responderticket',
      component: ResponderTicketView
    },
    {
      path: '/responderdashboard',
      name: 'responderdashboard',
      component: ResponderDashboardView
    },
  ]
})

export default router
