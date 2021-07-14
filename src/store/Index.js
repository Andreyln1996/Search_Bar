import Vue from "vue";
import Vuex from 'vuex';
import instance from "@/api/instance";
import {ACCESS_TOKEN, USERS_BY_NAME} from "@/api/routes";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: {},
        count: 10,
        name: ''
    },

    mutations: {
        setUsers(state, res) {
            state.users = res;
        },

        updateName(state, name) {
            state.name = name
        },

        updateCount(state) {
            state.count += 10
        },

        resetCount(state) {
            state.count = 10
        }
    },

    actions: {
        async fetchUsers({commit, state}) {

            return instance
                .get(USERS_BY_NAME(state.name) +
                '&count=' + state.count + '&fields=photo_100' +
                '&v=5.52' + ACCESS_TOKEN())
                .then(res => {
                    commit('setUsers', res.data.response.items)
                })
                .catch(err => console.log(err))
        }
    },

    getters: {
        USERS(state) {
            return state.users
        }
    }
})