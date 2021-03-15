<template lang="html">
<div>
    <h1>INDEX PAGE</h1> </br>
    <li @click="LinkTo('LoginPage')">
        GO TO LOGIN
    </li>
    <li @click="LinkTo('MovieIndexPage')">
        GO TO MOVIES
    </li>
</div>
</template>

<script>
export default {
    name: 'Main',
    methods: {
        LinkTo (name) {
            this.$router.push({name: name, query: {test: 'TestQuertString'}})
        },
    }
}
</script>

<style lang="css">

</style>