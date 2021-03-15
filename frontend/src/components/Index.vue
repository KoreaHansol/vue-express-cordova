<template lang="html">
<div>
    <h1>INDEX PAGE</h1> </br>
    <li @click="clickLogin">
        GO TO LOGIN
    </li>
</div>
</template>

<script>
export default {
    name: 'Main',
    methods: {
        clickLogin () {
            this.$router.push({name: 'LoginPage', query: {test: 'TestQuertString'}})
        },
    }
}
</script>

<style lang="css">

</style>