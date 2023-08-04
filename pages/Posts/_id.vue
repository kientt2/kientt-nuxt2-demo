<template>
    <div>
        {{post}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {}
        }
    },
    async asyncData ({ $axios, params }) {
        if (!params?.id){
            //alert('Error! no product id found!')
            return;
        }
        const id = params.id;
        const post = await $axios.$get(`https://fir-login-d212d-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${id}.json`);
        return {post}
    },
}
</script>

<style lang="css" scoped>

</style>
