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
        onSubmit() {
            if (this.email === '' || this.Password === '') {
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
            this.$axios.$post(API_AUTH, payload).then(result => console.log(result)).catch(err => alert('Catch Error ' + JSON.stringify(err)));
            // axios.post(API_AUTH, payload).then(result => console.log(result)).catch(err => alert('Catch Error ' + JSON.stringify(err)));
        }
    },
}

//acc: admin@gmail.com
//pw: 123456
//signup response: {
//     "kind": "identitytoolkit#SignupNewUserResponse",
//     "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjYyM2YzNmM4MTZlZTNkZWQ2YzU0NTkyZTM4ZGFlZjcyZjE1YTBmMTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyLWxvZ2luLWQyMTJkIiwiYXVkIjoiZmlyLWxvZ2luLWQyMTJkIiwiYXV0aF90aW1lIjoxNjkxMTQ0MzY4LCJ1c2VyX2lkIjoiQndscGUyTURLcWIzQXJ3Z1hPMzFFUG11NEZKMiIsInN1YiI6IkJ3bHBlMk1ES3FiM0Fyd2dYTzMxRVBtdTRGSjIiLCJpYXQiOjE2OTExNDQzNjgsImV4cCI6MTY5MTE0Nzk2OCwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYWRtaW5AZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.qxAk8_ieW5cdDwTdZ_z2Xfgp9-nmsTB--5TeWfUnjpS6vUTc-kvNtDbSHpObLoWFuAYYvxgpq23wokdG6wvk0Ordn6XYwx3ROO8O1X5HzPd0nJwtWNYumHXQ8GojLCppkjE4PppHUaToF5Pp_XgBKl80Zl2Qw7R8j6kzLMj2YyJ8PFq_9jCJqEMqspddiFNyYGeoUBTTSicAq6SSGR_ehvxahBaz07LTn1MJ0FzivKJ6dZpP_UuFcEkT-23QkenPATij7OQH1FZV6ZcsjRYfH1VGZcCRJQDBfXprF0wOqNBzrd_KkzLf1E6aDifckSHpy5m54RM277RjYdSARuygog",
//     "email": "admin@gmail.com",
//     "refreshToken": "AMf-vBxagDZQHdb6fH_nhUUEsNwyO2dkgqiBa7MaAzWPivpppcFg59B4vVZHGKe6KEordX2D9bA4H5pkhfu0ARi7EQNbc9jKGLsgXxvKR5PkVeFujtzWw1kJMnlS9JmEthYEq888F5ea-yus0_vZM6oeYKC-7mFLkZKhZLseGQ8khqTgyyt7hvhNuK5I-wQ6-rChdVOadR41B5q0T6pE6TifqejBUNxX2w",
//     "expiresIn": "3600",
//     "localId": "Bwlpe2MDKqb3ArwgXO31EPmu4FJ2"
//}
</script>



<style lang="scss" scoped>

</style>
