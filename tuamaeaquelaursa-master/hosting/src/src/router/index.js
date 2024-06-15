import Vue from 'vue';
import Router from 'vue-router';
import ga from 'vue-ga';
import CreateEmail from '@/components/createEmail.vue';
import MessageList from '@/components/messageList.vue';
import MessageDetail from '@/components/messageDetail.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: CreateEmail,
    },
    {
      path: '/:email',
      name: 'MessageList',
      component: MessageList,
    },
    {
      path: '/:email/:message',
      name: 'MessageDetail',
      component: MessageDetail,
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

ga(router, 'UA-126612006-1');

export default router
