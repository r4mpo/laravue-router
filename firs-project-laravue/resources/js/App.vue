<!-- O App.vue é o arquivo principal. Este será acompanhado pelos outros componentes -->

<template>
    <div>
        
        <nav>
            <div class="nav-wrapper">
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><router-link :to='{name: "home"}'><ion-icon name="home-outline"></ion-icon> Página inicial</router-link></li>
                    <li><router-link :to='{name: "form"}'><ion-icon name="reader-outline"></ion-icon> Cadastrar</router-link></li>
                    <li><router-link :to='{name: "sobre"}'><ion-icon name="information-circle-outline"></ion-icon> Sobre nós</router-link></li>
                </ul>
            </div>
        </nav>

        <div class="container">

            <!-- A tag "router-view" exibirá os conteúdos dos componentes -->
            <router-view></router-view>

        </div>

    </div>
</template>

<script>
export default {
    name: "App"
}
</script>

<style>
    nav {
        background-color: black;
        color: white;
    }
</style>