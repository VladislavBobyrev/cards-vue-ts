import { createStore, Commit } from 'vuex'

interface Requests {
  body: string,
  id: number,
  title: string,
  userId: number,
}

export default createStore({
  state() {
    return {
      requests: []
    }
  },
  mutations: {
    setRequests(state:any, requests:Requests[])
    {
      state.requests = requests
    },
  },

  actions: {
    async asyncLoad({ commit }: { commit: Commit }) {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
          .then(data => data.json())
        
        commit('setRequests', data);
      } catch(e) {}
    },
  },

})
