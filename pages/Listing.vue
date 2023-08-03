<template>
    <div>
        <h1>Post Listing</h1>
        <ul>
            <li v-for="item in items" :key="item.id">
                <nuxt-link to="/" >{{ item.title }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: []
        }
    },
    async fetch() {
        this.items = await fetch(
            'https://fir-login-d212d-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
        ).then((res) => {
            const x = res.json();
            console.log(x);
            return x;
        });
        console.log(this.items)
    },
}

//todo: reverse, postID

</script>

<style lang="scss" scoped>

</style>
