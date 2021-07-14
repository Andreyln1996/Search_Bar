import VueRouter from "vue-router";
import ContentArea from "@/components/ContentArea";
import UserPage from "@/components/UserPage";


export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            component: ContentArea,
            name: 'content',

        },

        {
            path: '/:id',
            component: UserPage,
            name: 'userpage',

        },
    ]
})