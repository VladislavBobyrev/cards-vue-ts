<template>
  <div class="card flex-column" v-for="user in data" :key="user.id">
    <div class="card-header">
      <h2 class="card__title ttu">{{user.id}}</h2>
    </div>
    <div class="card-body flex-column">
      <h3 class="card__subtitle ttu">{{user.title}}</h3>
      <span>{{user.userId}}</span>
      <p>{{user.body}}</p>
    </div>
    <div class="card-footer flex-sb">
      <button class="succes">succes</button>
      <button class="danger">danger</button>
    </div>
  </div>
 

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

interface Requests {
  body: string,
  id: number,
  title: string,
  userId: number,
}

export default defineComponent({

  setup() {
    const store = useStore()
    
    store.dispatch('asyncLoad')
    const data  = store.state.requests
    console.log(data);

    return{
      data
    } 
  },

})
</script>


