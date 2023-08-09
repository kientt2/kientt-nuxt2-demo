import Vuex from 'vuex'
import Cookies from 'js-cookie';
import {trim} from "core-js/internals/string-trim";

const createStore = () => {
    return new Vuex.Store({
        state: {
            count: 0,
            posts: [{title: 'First load post', content: 'First load post very long content'}],
            todos: [
                { id: 1, text: '...1', done: true },
                { id: 2, text: '...2', done: false },
                { id: 3, text: '...3', done: false },
                { id: 4, text: '...4', done: true },
            ],
            token: '',
            isLoggedin: false
        },
        mutations: {
            setPosts (state, posts) {
                console.log('mutations setPosts');
                state.posts = posts;
            },
            increment (state, step) {
                if (isNaN(step)) {
                    return;
                } else {
                    state.count += parseInt(step);
                }
            },
            setLoggedIn(state) {
                state.isLoggedin = true;
            },
            setLoggedOut(state) {
                state.isLoggedin = false;
            },
        },
        getters: {
            getToken(state) {
                return state.token;
            },
            getAuth(){
                return Cookies.get('idToken');
            },
        },
    })
}

export default createStore
