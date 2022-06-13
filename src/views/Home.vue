<template>
  <main>
    <div class="cards">
      <Card/>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/card/Card.vue'
export default defineComponent({
  components:{Card},
  setup() {
    
  },
})
</script>
