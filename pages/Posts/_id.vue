<template>
    <div>
        <h1>Post detail</h1>
        <div v-if="modeEdit === false">
            <div>{{ post }}</div>
            <button type="submit" @click="modeEdit = !modeEdit">edit</button>
            <button type="submit" @click="handleRemove">delete</button>
        </div>
        <div v-if="modeEdit === true">
            <div>
                title: <input type="text" v-model="post.title">
            </div>
            <div>
                content: <input type="text" v-model="post.content">
            </div>
            <div>
                <button type="submit" @click="handleEdit">Submit Edit</button>
                <button type="submit" @click="modeEdit = false">cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {},
            modeEdit: false
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
        async handleEdit(){
            const PATCH_URL = `posts/${this.$route.params.id}.json`;
            const payload = {
                title: this.post.title,
                content: this.post.content,
            }
            console.log(payload)
            await this.$api.$patch(PATCH_URL, payload).then(result => {alert('success')}).catch(e => alert(e))
        },
        async handleRemove() {
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
