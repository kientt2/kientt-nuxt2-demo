<template>
    <div>
        <header>
            <div class="logo">
                Header
            </div>
            <div class="menu">
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/Listing">Listing</nuxt-link></li>
                    <li><nuxt-link to="/Post">Post</nuxt-link></li>
                    <li><nuxt-link to="/About">About</nuxt-link></li>
                    <li><nuxt-link to="/Profile">Profile</nuxt-link></li>
                    <li><nuxt-link to="/register">Register</nuxt-link></li>
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
header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 1px solid #000;
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
</style>
