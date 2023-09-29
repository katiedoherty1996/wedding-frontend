<template>
    <div class="q-gutter-y-md column" style="max-width: 300px">
        <q-select 
            clearable 
            filled 
            color="teal" 
            v-model="model" 
            :options="options" 
            label="Filter Cards" 
        />
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'; 

export default defineComponent({
    name: "SelectDropdown",
    data() {
        return {
            model: ref(null),
        }
    },
    props: {
        options: Array,
    }
});
</script>