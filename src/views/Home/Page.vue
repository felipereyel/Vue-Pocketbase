<template>
  <h1>Notes</h1>
  <div v-if="loading">
    <h2>Loading...</h2>
  </div>
  <div v-else-if="result">
    <ul>
      <li v-for="note in result.notes" :key="note.id">
        <router-link :to="{ name: 'noteEditor', params: { id: note.id } }">
          {{ note.title }}
        </router-link>
      </li>
    </ul>
  </div>
  <div v-else>
    <h2>Not found</h2>
  </div>
</template>

<script setup lang="ts">
import { query } from '.';

const { result, loading } = query();
</script>

<style scoped></style>
