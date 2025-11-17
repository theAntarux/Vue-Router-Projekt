import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DestinationView from '@/views/DestinationView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ExperienceDetail from '@/components/ExperienceDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/destination/:DestinationName',
      name: 'destination',
      component: DestinationView,
      props: true,
      redirect: { name: 'experiences' }, // Found this in docs as a fix, idk why but without redirect the page won't load the children upon render, only after page reload
      children: [
        {
          path: '',
          name: 'experiences',
          component: ExperienceView,
          props: true,
        },
        {
          path: ':ExperienceName',
          name: 'experience',
          component: ExperienceDetail,
          props: true
        }
      ]
    }
  ],
})

export default router
