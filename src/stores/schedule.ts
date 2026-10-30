import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useScheduledStore = defineStore( "scheduled", () =>
{
    const shifts = ref<Array<{ id: String, name: String; }>>( [] );

    const totalShifts = computed( () => shifts.value.length );

    function addShift ( shift: { id: String, name: String; } )
    {
        shifts.value.push( shift );
    }

    return { shifts, totalShifts, addShift };
} );