<template>
    <div>
        <div>{{post}}</div>
        <div>
            <button type="submit" @click="removeData">delete</button>
        </div>
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
    created() {
        console.log(this.$route.params.id)
    },
    methods: {
        async removeData() {
            if(!confirm('Ban co muon xoa data nay chu?')) return;
            const DELETE_URL = `posts/${this.$route.params.id}.json`;
            const result = await this.$api.$delete(DELETE_URL).then(rs => alert('success')).catch(e => {
                alert(e)
                console.log(e)
            })
            console.log('result: ', result)
            //navigate to '/Posts'
        }
    },
}
</script>

<style lang="css" scoped>

</style>
