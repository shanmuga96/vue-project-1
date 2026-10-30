<template>
    <section class="list-panel">
        <h2>Vue List (Add, Edit, Delete)</h2>

        <form class="item-form" @submit.prevent="addOrUpdateItem">
            <input v-model="item" placeholder="Enter item" aria-label="Item name" />
            <button class="add-button" type="submit">
                {{ editingIndex === null ? 'Add' : 'Update' }}
            </button>
        </form>

        <ul v-if="items.length" class="items" aria-label="Items">
            <li v-for="(itm, index) in items" :key="index" class="item-row">
                <span>{{ itm }}</span>
                <span class="item-actions">
                    <button type="button" aria-label="Edit item" @click="editItem(index)">✎</button>
                    <button type="button" aria-label="Delete item" @click="deleteItem(index)">×</button>
                </span>
            </li>
        </ul>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const item = ref('')
const items = ref(['Melk', 'Bananen', 'Boter', 'Brood', 'Kaas'])
const editingIndex = ref(null)

function addOrUpdateItem() {
    const trimmed = item.value.trim()
    if (trimmed === '') return

    if(editingIndex.value === null) {
        // Add mode
        items.value.push(trimmed)
    } else {
        // Update mode
        items.value[editingIndex.value] = trimmed
        editingIndex.value = null
    }

    item.value = ''
}

function deleteItem(index){
    items.value.splice(index, 1)
        if (editingIndex.value === index) {
        item.value = ''
        editingIndex.value = null
        } else if (editingIndex.value !== null && editingIndex.value > index) {
                editingIndex.value -= 1
    }
}

function editItem(index) {
        item.value = items.value[index]
    editingIndex.value = index
}
</script>

<style scoped>
.list-panel {
    width: min(100%, 400px);
    margin: 0 auto;
    padding: 1rem;
}

h2 {
    margin-bottom: 0.25rem;
    color: var(--color-heading);
    font-size: 1.25rem;
    font-weight: 600;
    white-space: nowrap;
}

.item-form {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

input {
    min-width: 0;
    flex: 1;
    height: 2rem;
    padding: 0 0.6rem;
    border: 1px solid #b7b7b7;
    background: #fff;
    color: #222;
}

button {
    min-width: 2rem;
    height: 2rem;
    border: 1px solid #b7b7b7;
    background: #f4f4f4;
    color: #222;
    cursor: pointer;
}

button:hover,
button:focus-visible {
    border-color: #42b883;
    outline: none;
}

.add-button {
    padding: 0 0.55rem;
}

.items {
    display: grid;
    gap: 0.35rem;
    margin: 1rem 0 0;
    padding: 0;
    list-style: none;
}

.item-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 2rem;
    gap: 0.75rem;
}

.item-actions {
    display: flex;
    gap: 0.5rem;
}

.item-actions button {
    font-size: 1.25rem;
    line-height: 1;
}

@media (max-width: 480px) {
    h2 {
        white-space: normal;
    }
}
</style>
