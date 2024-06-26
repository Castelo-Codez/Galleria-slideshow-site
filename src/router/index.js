import {createRouter, createWebHistory} from "vue-router";
const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/slideShow/:id",
        name: "slideShow",
        component: () => import("../views/slideShow.vue"),
        children: {
            path: "/slideShow/:id",
        },
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
