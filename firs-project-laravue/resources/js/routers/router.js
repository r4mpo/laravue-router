// Primeiro, importamos os componentes
// Views que serão exibidas no front-end
import Home from '../view/Home.vue';
import Form from '../view/Form.vue';
import Sobre from '../view/Sobre.vue';

// Métodos importados do Vue3 para criar rotas e histórico
import {createRouter, createWebHistory} from "vue-router";


// Agora criamos as rotas.
// Será passado o caminho, nome da rota e retorno
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },

    {
        path: '/form',
        name: 'form',
        component: Form
    },

    {
        path: '/sobre',
        name: 'sobre',
        component: Sobre
    }
];

// Criando e exportando a instância da rota
const router = new createRouter({
    history: createWebHistory(),
    routes
});
export default router;