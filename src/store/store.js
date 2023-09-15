import { createStore } from 'vuex'

const store = createStore({
    state: {
        count: 0
    },
    mutations: {
        increment(state, payload) {
            state.count = state.count + payload.amount
        }
    },
    actions: {
        incrementTwoSec(context) {
            setTimeout(() => {
                context.commit('increment', { amount: 10 })
            }, 2000)
        },
    },
    getters: {
        count(state) {
            return state.count
        },
        double(state) {
            return state.count * 2
        }
    }
})

export default store