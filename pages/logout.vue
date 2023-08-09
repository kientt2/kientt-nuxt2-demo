<template>
    <div>
        <h1>Logout</h1>
        <button type="submit" @click="handleSignout">Logout</button>
    </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
    methods: {
        handleSignout(context) {
            const {redirect} = context;
            Cookies.remove('idToken');
            this.$store.commit('setLoggedOut');
            alert('Sign Out Success!')
            console.log(context)
            location.href = '/'
        }
    },
    created() {
        console.log(this)
    },
}
</script>

<style lang="scss" scoped>

</style>
