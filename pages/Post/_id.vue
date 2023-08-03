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
    async fetch() {
        this.post = await fetch(
            'https://fir-login-d212d-default-rtdb.asia-southeast1.firebasedatabase.app/posts/1.json'
        ).then((res) => {
            const x = res.json();
            console.log(x);
            return x;
        });
    },
}
</script>

<style lang="css" scoped>

</style>
