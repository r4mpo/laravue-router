<!-- Arquivos .vue, por padrão vem com 3 possíveis blocos -->
<!-- Template / Script / Style -->

<template>
    <div>
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <input id="first_name" type="text" class="validate">
                        <label for="first_name">Nome</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="last_name" type="text" class="validate">
                        <label for="last_name">Sobrenome</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="password" type="password" class="validate">
                        <label for="password">Senha</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="email" type="email" class="validate">
                        <label for="email">E-mail</label>
                    </div>
                </div>

                <button class="btn waves-effect waves-light" type="submit" name="action">Enviar</button>
            </form>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>
@media screen and (min-width: 992px) {
    form {
        margin-top: 10%;

    }
}
</style>