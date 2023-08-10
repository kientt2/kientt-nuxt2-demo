<template>
    <div>
        <h1>Vuex store demo</h1>
        <div>Count: {{ count }}</div>
        <div>Step: <input type="text" v-model="step"></div>
        <div>
            <button @click="handleIncrease">Increase</button>
        </div>
    </div>
</template>

<script>

import {mapState, mapGetters} from 'vuex';

export default {
    data() {
        return {
            step: 5,
        }
    },
    created() {
        console.log(this.$store.state)
    },
    methods: {
        handleIncrease() {
            this.$store.commit('increment', this.step);
        }
    },
    computed: mapState({
        count: state => state.count,
        countPlusLocalState(state) {
            return state.count + this.localCount
        },
    }),

    // computed: mapState({
    //     count: state => state.count,
    //     countPlusLocalState: state => state.count + this.localCount
    // }) // error

}
</script>

<style lang="scss" scoped>

</style>
