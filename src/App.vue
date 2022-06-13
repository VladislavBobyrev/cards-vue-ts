<template>
  <MainLayout/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from '@/layout/main/MainLayout.vue'
import './style/style.scss'

export default defineComponent({
  name: 'App',
  components: {MainLayout}
});
</script>


