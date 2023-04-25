import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import CarView from "../views/CarView.vue"
import NotFoundView from "../views/NotFoundView.vue"
import DealerView from '../views/DealerView.vue'
import ManufactureView from '../views/ManufactureView.vue'
const router = createRouter({
history: createWebHistory(import.meta.BASE_URL),
routes:
[{
   path: "/",
   name: "home",
   component: HomeView
},
{
    path: "/about",
    name: "about",
    component: AboutView
},
{
    path: '/car/:id',
    name: 'car',
    component: CarView,
    children: [
        {
            path: "dealer",
            component: DealerView
        },
        {
            path: "manufacture",
            component: ManufactureView
        }
    ]
},
{
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
}
]
})

export default router 