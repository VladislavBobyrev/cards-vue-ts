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
      requests: [],
      conutPage: 1,
      pageItems: []
    }
  },
  mutations: {
    setRequests(state:any, requests:Requests[])
    {
      state.requests = requests
    },
    getNextPage(state: any) {
      state.pageItems = state.requests.slice(0, state.requests.length  / 10 * state.conutPage) 
    }
  },

  actions: {
    async asyncLoad({ commit }: { commit: Commit }) {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
          .then(data => data.json())
        
        commit('setRequests', data);
        commit('getNextPage');
      } catch(e) {}
    },
  },

})
