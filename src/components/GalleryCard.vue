<template>
    <div class="q-pa-md flex wrap" :class="screenSize == 'sm' ? 'q-gutter-md' : ''">
        <div
            v-for="(item, index) in products"
            :key="index"
            class="col-sm-12"
            :style="screenSize !== 'sm' ? 'flex: 0 0 calc(20% - 10px); margin: 5px;' : 'width:100%;'"
        >
            <q-card class="my-card cursor" style="height: 100%;">
                <img :src="item.image">

                <q-card-section>
                    <div class="text-h6">{{ item.invitationName }}</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Price: {{ item.price }} each
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                screenSize: 'md', 
            };
        },
        props: {
            products: Array,
        },
        methods: {
            handleResize() {
                // Update the screenSize data property based on the window width
                if (window.innerWidth < 600) {
                    this.screenSize = 'sm'; // Small screen
                } else {
                    this.screenSize = 'md'; // Medium or larger screens
                }
            },
        },
        mounted() {
            // Call the checkScreenSize method when the component is mounted
            this.handleResize();

            // Add an event listener to window resize events to update screenSize
            window.addEventListener('resize', this.checkScreenSize);
        },
        beforeUnmount() {
            // Remove the window resize event listener when the component is destroyed
            window.removeEventListener('resize', this.checkScreenSize);
        },
    }
</script>