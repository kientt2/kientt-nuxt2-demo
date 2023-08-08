<template>
    <div>
        <header>
            <div class="logo">
                <nuxt-link to="/">Logo</nuxt-link>
            </div>
            <div class="menu">
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/Posts">Posts</nuxt-link></li>
                    <li><nuxt-link to="/CreatePost">New Post</nuxt-link></li>
                    <li><nuxt-link to="/Profile">Profile</nuxt-link></li>
                    <li><nuxt-link to="/register">Register</nuxt-link></li>
                    <li><nuxt-link to="/login">Login</nuxt-link></li>
                </ul>
            </div>
        </header>
        <Nuxt />
        <footer>Footer</footer>
    </div>
</template>

<script setup>

</script>


<style lang="css">
html {
    font-family: DM Sans,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    line-height: 1.5
}

header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 1px solid #e2e8f0;
}
header .menu ul {
    display: flex;
}
header .menu ul li{
    padding: 0 5px;
    text-align: center;
    list-style: none;
}

footer{
    background: #fff;
    position: fixed;
    bottom: 0;

}
.menu a.nuxt-link-exact-active {
    color: red;
}

.shadow {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.border-transparent {
    border-color: transparent;
}

</style>
