<template>
    <div>
        {{post}}
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            post: {}
        }
    },
    async asyncData({route}) {
        if (!route?.params?.id){
            alert('Error! no product id found!')
            return;
        }
        const id = route.params.id;
        const result = await axios.get(`https://fir-login-d212d-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${id}.json`);
        return {post: result.data}
    },
}
</script>

<style lang="css" scoped>

</style>
