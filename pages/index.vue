<template>
  <div>
    <h1>Index Page</h1>
    <p>A demo API call and login by nuxt 2 & vue 2</p>
    <p><nuxt-link to="/CreatePost">Create a new post</nuxt-link></p>
    <p><nuxt-link to="/Posts">Listing</nuxt-link></p>
  </div>
</template>

<script>
export default {
    name: 'IndexPage',
    middleware (ctx) {
        //console.log('middleware ctx $gtm', ctx.$gtm)
        ctx.$gtm.push({ event: 'ssr' })
    }
}
</script>
