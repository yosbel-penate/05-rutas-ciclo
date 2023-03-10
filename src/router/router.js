import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    { 
        path: "/",
        name: 'root',
        component: () => import( /*webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage') 
    },
    { 
        path: "/about",
        name: 'about',
        component: () => import( /*webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage')
    },
    { 
        path: "/:id", 
        name:'pokemon-id',
        component: () => import( /*webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
        props: (route)=>{
            const id = Number(route.params.id)
            return isNaN(id)?{id:1}:{id}
        } 
    },
    { 
        path: "/:pathMatch(.*)*", 
        component: () => import( /*webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router