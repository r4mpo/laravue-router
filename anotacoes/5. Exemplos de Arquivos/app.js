import { createApp } from "vue";
import App from './App.vue';

// Importando arquivo de rotas
import router from "./routers/router";

// Criando app
// Usando router
// Anexando ao elemento #app
const app = 
    createApp(App);
    app.use(router);
    app.mount("#app");