<script setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<template>
  <p>Counter: {{ store.count }}</p>
  <button @click="store.increment">Increment</button>
  <button @click="store.decrement">Decrement</button>
</template>