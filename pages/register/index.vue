<template>
    <section>
        <form @submit.prevent="onSubmit">
            <div>Email <input v-model="email" placeholder="admin@gmail.com" type="text"/></div>
            <div>Password <input v-model="password" placeholder="password" type="text"/></div>
            <div>Re-password <input v-model="rePassword" placeholder="re-password" type="text"/></div>
            <button type="submit">register</button>
        </form>
    </section>
</template>

<script>
export default {
    layout: 'custom',
    data() {
        return {
            email: '',
            password: '',
            rePassword: ''
        }
    },
    methods: {
        onSubmit() {
            alert('onsubmit');
            if (this.password !== this.rePassword) {
                alert('Hay nhap password dung');
                return false
            }

            //call API - firebase auth REST API
            const payload = {
                email: this.email,
                password: this.password,
                returnSecureToken: true
            }

            //const PROJECT_ID = "fir-login-d212d";
            const API_AUTH = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${process.env.fbApiKey}`
            //alert(API_AUTH);
            //this.$axios.$post(API_AUTH, payload).then(result => console.log(result)).catch(err => console.log(err));
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
