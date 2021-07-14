import VueRouter from "vue-router";
import ContentArea from "@/components/ContentArea";


export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            component: ContentArea,
            name: 'content',

        },
    ]
})