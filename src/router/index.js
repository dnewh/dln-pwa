import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Davey Newhall',
        metaTags: [
          {
            name: 'description',
            content: 'Davey Newhall\'s home page.'
          },
          {
            name: 'og:description',
            content: 'Davey Newhall\'s home page.'
          }
        ]
      }
    },
    {
      path: '/about',
      name: 'About',
      component: Home,
      meta: {
        title: 'About | Davey Newhall',
        metaTags: [
          {
            name: 'description',
            content: 'About Davey Newhall.'
          },
          {
            name: 'og:description',
            content: 'About Davey Newhall.'
          }
        ]
      }
    }
  ],
  mode: 'history'
})
