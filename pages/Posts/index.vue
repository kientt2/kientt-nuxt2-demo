<template>
    <div>
        <h1>Post Listing</h1>
        <ul>
            <li v-for="item in items" :key="item.id">
                <nuxt-link :to="item.url" >{{ item.title }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    data() {
        return {
            items: []
        }
    },
    created() {
        this.$store.commit('increment')
        //console.log('Post List: ', this.$store.state.count)
    },
    async asyncData (context) {
        const { $api, params, store } = context;
        const data = await $api.$get('/posts.json');
        const items = [];
        for (const key in data) {
            const item = data[key];
            item.url = `/Posts/${key}`  ;
            items.push(item);
        }
        // console.log($api,context, store)
        // await  store.dispatch('nuxtServerInit', items);
        return {items};
    },
    // async fetch() {
    //     this.items = await fetch(
    //         'https://fir-login-d212d-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
    //     ).then((res) => {
    //         const x = res.json();
    //         console.log(x);
    //         return x;
    //     });
    //     console.log(this.items)
    // },

}

//todo: reverse, postID
//$http la gi?


</script>

<style lang="scss" scoped>

</style>
