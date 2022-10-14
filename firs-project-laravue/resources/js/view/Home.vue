<!-- Arquivos .vue, por padrão vem com 3 possíveis blocos -->
<!-- Template / Script / Style -->

<template>
    <div>
        <table class="highlight">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Produto</th>
                    <th>Valor</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                </tr>
                <tr>
                    <td>Alan</td>
                    <td>Jellybean</td>
                    <td>$3.76</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
export default {

}
</script>

<style>

@media screen and (min-width: 992px) {
    table {
        margin-top: 10%;
    }
}
</style>