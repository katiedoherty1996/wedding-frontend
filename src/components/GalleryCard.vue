<template>
    <div class="q-pa-md flex wrap" :class="screenSize == 'sm' ? 'q-gutter-md' : ''">
        <div
            v-for="(item, index) in displayedInvitations"
            :key="index"
            class="col-sm-12 p-3"
            :style="cardsOnEachRow"
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
            currentPage: Number,
            category: Object,
        },
        computed:{
            displayedInvitations() {
                if(isMobileDevice()){
                    return this.products;
                } else{
                    this.addPageNoId();
                    return this.products.filter(invitation => invitation.pageNo == this.currentPage);
                }
            },

            cardsOnEachRow(){
                if(isMobileDevice()){
                    return 'width:100%;'
                } else if(isIpadDevice()){
                    return 'flex: 0 0 calc(33% - 10px); margin: 5px;';
                } else{
                    return 'flex: 0 0 calc(25% - 10px); margin: 5px;';
                }
            }
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

            addPageNoId() {
                let count = 0;
                let pageNo = 1;
                let numberOfInvitationsOnPage = isIpadDevice() ? 15 : 20

                this.products.map(invitation => {
                    invitation.pageNo = null;
                });

                return this.products.map(invitation => {
                    if(count <= numberOfInvitationsOnPage - 1){
                        invitation.pageNo = pageNo;
                        count++;
                    } else if(count == numberOfInvitationsOnPage){
                        count = 1;
                        pageNo = pageNo + 1;
                        invitation.pageNo = pageNo;
                    }
                });
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