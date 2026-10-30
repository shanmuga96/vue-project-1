<script setup lang="ts">
// Define props for the component
const props = defineProps<{
    title: string
    count?: number
}>()

// Define emits for the component
const emit = defineEmits<{
    (e: 'update-status', id: string, newStatus: string): void
}>()

function handleClick() {
    emit('update-status', '123', 'completed')
}
</script>