<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue'

// 1. Primitive state
const searchQuery = ref<string>('')

// 2. Complex Object state
interface Shift {
  id: number
  employeeName: string
  hours: number
  status: 'assigned' | 'unassigned'
}
const shifts = ref<Shift[]>([])

// 3. Computed property (Auto-updating derived data)
const filteredShifts = computed(() => {
  return shifts.value.filter(shift => 
    shift.employeeName.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

// 4. Methods / Handlers
function addShift(newShift: Shift) {
  shifts.value.push(newShift)
}
</script>

<template>
  <div>
    <h1>Shift Management</h1>

    <input v-model="searchQuery" placeholder="Search by employee name" />

    <ul>
      <li v-for="shift in filteredShifts" :key="shift.id">
        {{ shift.employeeName }} - {{ shift.hours }} hours - {{ shift.status }}
      </li>
    </ul>

  </div>
</template>