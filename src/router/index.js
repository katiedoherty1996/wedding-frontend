import { route } from 'quasar/wrappers';
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router';
import routes from './routes';

export default route(function () {
    const createHistory = process.env.SERVER
      ? createMemoryHistory
      : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

    const Router = createRouter({
        scrollBehavior(to, from) {
            if (to.meta.scrollToAboutUs) {
                return { el: "#aboutUs", behavior: 'smooth' };
            } else if (to.meta.scrollToContactUs) {
                return { el: '#contactUs', behavior: 'smooth' };
            } else if (to.meta.scrollToLocation) {
                return { el: '#location', behavior: 'smooth' };
            } else {
                return { left: 0, top: 0, behavior: 'smooth' };
            }
        },
        routes,
        history: createHistory(process.env.VUE_ROUTER_BASE)
    });

    return Router;
});
