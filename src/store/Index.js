import Vue from "vue";
import Vuex from 'vuex';
import instance from "@/api/instance";
import {
    ACCESS_TOKEN,
    USER_BY_ID,
    USERS_BY_NAME
} from "@/api/routes";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: {},
        user: {},
        count: 10,
    },

    mutations: {
        setUsers(state, res) {
            state.users = res;
        },

        updateUser(state, res) {
            state.user = res;
            // state.user.push(res);
        },

        updateCount(state) {
            state.count += 10
        },

        resetCount(state) {
            state.count = 10
        }
    },

    actions: {
       searchUsers({commit, state}, name) {
            return instance
                .get(USERS_BY_NAME(name) +
                    '&count=' + state.count +
                    '&fields=photo_100' +
                    ',domain' + ACCESS_TOKEN() + '&v=5.52')
                .then(res => {
                    commit('setUsers', res.data.response.items)
                    // console.log(res)
                })
                .catch(err => console.log(err))
        },

        getUser({commit}, id) {
            console.log('getuser: id', id)
            return instance
                .get(USER_BY_ID(id) +
                    '&fields=photo_200' +
                    ACCESS_TOKEN() + '&v=5.89')
                .then(res => {
                    console.log(res.data.response)
                    commit('updateUser', res.data.response)
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