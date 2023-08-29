<template>
  <h1>Notes</h1>
  <div v-if="loading">
    <h2>Loading...</h2>
  </div>
  <div v-else-if="result">
    <h2>{{ result.note.title }}</h2>
    <textarea cols="30" rows="10" v-model="result.note.content"></textarea>
  </div>
  <div v-else>
    <h2>Not found</h2>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { query } from '.';

const route = useRoute();
const { result, loading } = query(route.params.id as string);
</script>

<style scoped></style>
