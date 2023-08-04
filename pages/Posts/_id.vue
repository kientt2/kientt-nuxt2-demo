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
    async asyncData ({ $api, params }) {
        if (!params?.id){
            //alert('Error! no product id found!')
            return;
        }
        const id = params.id;
        const post = await $api.$get(`/posts/${id}.json`);
        return {post}
    },
}
</script>

<style lang="css" scoped>

</style>
