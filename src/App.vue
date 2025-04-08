<template>
  <v-app>
    <main>
      <RouterView />
    </main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, createRouter } from 'vue-router'
</script>