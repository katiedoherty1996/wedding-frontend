<template>
    <div class="q-gutter-y-md" style="max-width: 270px">
        <q-select 
            clearable 
            filled 
            color="light-green-10" 
            v-model="selectedCategoryId" 
            :options="options" 
            :label="label" 
            option-value="optionId"
            option-label="optionName"
        />
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'; 

export default defineComponent({
    name: "SelectDropdown",
    data() {
        return {
            selectedCategoryId: null,
        }
    },
    props: {
        options: Array,
        label: String,
        clearFilters: Boolean,
        selectedValue: {
            type: Object,
            required: false
        },
    },
    watch: {
        selectedValue(){
            this.selectedCategoryId = this.selectedValue;
            console.log('selectedValue', this.selectedCategoryId)
        },
        clearFilters(){
            this.selectedCategoryId = null;
        },
        selectedCategoryId(newVal) {
            this.$emit('categorySelected', this.selectedCategoryId);
        },
    },
});
</script>