<template>
    <div class="q-pa-md">
        <q-btn-dropdown
            class="glossy"
            color="teal"
            :label="selectedOption || 'Filter Cards'"
            @click="onMainClick"
        >
            <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                        <q-item-label>Photos</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                        <q-item-label>Vacation</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-btn-dropdown>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedOption: '', // Initialize selectedOption to an empty string
        };
    },
    methods: {
        onMainClick() {
        // Handle main click if needed
        },
        onItemClick(option) {
            this.selectedOption = option; // Set the selected option to the label
        },
    },
    };
</script>