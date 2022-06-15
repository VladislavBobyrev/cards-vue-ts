<template>
  <main>
    <div class="cards">
      <Card/>
    </div>
    <button @click="getNextPage" class="btn-pagination">download cards</button>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/card/Card.vue'
import store from '@/store'
export default defineComponent({
  components:{Card},
  setup() {
        const getNextPage = () => {
      store.state.conutPage++
      store.commit('getNextPage')
    }
    return{
      getNextPage,
    } 
  },
})
</script>
