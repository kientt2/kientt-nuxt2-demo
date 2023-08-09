<template>
    <section>
        <h1>Login</h1>
        <form @submit.prevent="onSubmit">
            <div>Email <input v-model="email" placeholder="admin@gmail.com" type="text"/></div>
            <div>Password <input v-model="password" placeholder="123456" type="text"/></div>
            <button type="submit">login</button>
        </form>
    </section>
</template>

<script>
import axios from 'axios';
import Cookies from "js-cookie";
export default {
    layout: 'custom',
    data() {
        return {
            email: 'admin@gmail.com',
            password: '123456',
            rePassword: ''
        }
    },
    methods: {
        async onSubmit(context) {
            const {store} = context;
            if (this.email === '' || this.password === '') {
                alert('Hay nhap email, pw');
                return false
            }

            //call API - firebase auth REST API
            const payload = {
                email: this.email, //'admin@gmail.com',
                password: this.password, //'123456',
                returnSecureToken: true
            }

            const API_AUTH = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`
            try {
                const result = await this.$axios.$post(API_AUTH, payload);
                const {idToken} = result;
                Cookies.set('idToken', idToken);
                this.$store.commit('setLoggedIn')
                alert('success');
                this.$router.push('/');
            } catch (e) {
                alert('Catch Error ' + JSON.stringify(e))
                console.log('Catch Error ',(e))
            }
        }
    },
    created() {
        //console.log(Cookies.get('idToken'))
    },
}

//acc: admin@gmail.com
//pw: 123456
//login response: {
//     "kind": "identitytoolkit#VerifyPasswordResponse",
//     "localId": "Bwlpe2MDKqb3ArwgXO31EPmu4FJ2",
//     "email": "admin@gmail.com",
//     "displayName": "",
//     "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjYyM2YzNmM4MTZlZTNkZWQ2YzU0NTkyZTM4ZGFlZjcyZjE1YTBmMTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyLWxvZ2luLWQyMTJkIiwiYXVkIjoiZmlyLWxvZ2luLWQyMTJkIiwiYXV0aF90aW1lIjoxNjkxMzc1Nzc0LCJ1c2VyX2lkIjoiQndscGUyTURLcWIzQXJ3Z1hPMzFFUG11NEZKMiIsInN1YiI6IkJ3bHBlMk1ES3FiM0Fyd2dYTzMxRVBtdTRGSjIiLCJpYXQiOjE2OTEzNzU3NzQsImV4cCI6MTY5MTM3OTM3NCwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYWRtaW5AZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.PgnDzxRKF2_DsvzlV-wUOnTmbkumXGS8Eo5Sd1B5IPS3BOQHAvl-Uf6DAgpyZb2guTfXmY-CaeIu5zHLUKLvZQxh7b1vt80DgvSY0qs9FQZeOMlEBvufJosv8t-wAvvRd8DcU1LytJTS8bddgRxFZSwzx-o85-p-y2j5YS-cBIy9riEjLc9ZEKHaOI3b5OlGB7ATdEhXLU35-lObTlKMywx0n5azi7tCqACrJB2gZClUspOqgZEc9BqRzA0fUi5hQJDC1SQ52wVbFWd82Mo3XihUIV8MuFRstR3HF7ijm8ydJdn-SYvkseg3Z25tkv2yiJsWawWJlmdefjbVIDEUZQ",
//     "registered": true,
//     "refreshToken": "AMf-vBzRJDDB8AdmWvBKTvbO5_onze3ONddcyABlCVmxRMVO-jKyuQpPGnoSOkRNBsEDHzCz9xZYC7ctpsBSFafOyPVIT6I5WSw1apflMNgy_XyGBkAmdTyJ_jbxucIuXW734c-Nk71VUL2Fj_9B0NbgsBx4QHv_nOc-uUWTYaH_zNIQGS4SgdJ4oEZZCOSvYI-FWxCFXz460biOqfrNn8bdeF9xVivv5A",
//     "expiresIn": "3600"
// }
</script>



<style lang="scss" scoped>

</style>
