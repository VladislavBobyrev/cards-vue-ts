<template>
 <div class="container">
    <AppHeader/>
    <Home/>  
    <AppFooter/>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@/components/header/AppHeader.vue';
import AppFooter from '@/components/footer/AppFooter.vue';
import Home from '@/views/Home.vue'

export default defineComponent({
components:{AppHeader, AppFooter, Home},
})
</script>
