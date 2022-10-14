<!-- O App.vue é o arquivo principal. Este será acompanhado pelos outros componentes -->

<template>
    <div>
        <router-link :to='{name: "home"}'>Home</router-link>
        <router-link :to='{name: "form"}'>Formulário</router-link>
        <div class="container">
            <p>Primeiro projeto com LaraVue</p>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>