<template>
    <div>
        <h1>Create A New Post</h1>
        <div>
            <div>
                <div>
                    Title <input v-model="title" type="text" />
                </div>
                <div>
                    Content <input v-model="content" type="text" />
                </div>
                <div>
                    <button @click="submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        async submit() {

            // validate
            if (this.title === '' || this.content === '') {
                alert('Validation failed! Please input title and content');
                return false;
            }

            const root = "https://fir-login-d212d-default-rtdb.asia-southeast1.firebasedatabase.app";
            const API_POST = `${root}/posts.json`
            const payload = {
                title: this.title,
                content: this.content
            }

            const result = await fetch(API_POST, {
                method: 'POST',
                body: JSON.stringify(payload),
            }).then((res) => {
                const x = res.json();
                console.log('success: ', x);
            });
        },
    },
}
</script>

<style lang="scss" scoped></style>
