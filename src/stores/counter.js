import { ref, computed, onMounted, onUpdated, onUnmounted } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref( 0 )
  
  const doubleCount = computed( () => count.value * 2 )
  
  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  onMounted(() => {
    console.log('Counter store mounted')
  })

  onUpdated(() => {
    console.log('Counter store updated')
  })

  onUnmounted(() => {
    console.log('Counter store unmounted')
  })

  return { count, doubleCount, increment, decrement }
})
