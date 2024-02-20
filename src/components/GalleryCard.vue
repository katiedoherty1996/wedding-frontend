<template>
    <div class="q-pa-lg row">
        <div
            v-for="(item, index) in displayedInvitations"
            :key="index"
            class="col-12 col-sm-6 col-md-4 col-lg-3 q-pa-md"
        >
            <q-card 
                class="my-card cursor" 
                style="height: 100%;"
                @click="openCardDetails(item.id)"
            >
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
                showModal: false,
                screenSize: 'sm',
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
        },
        methods: {
             openCardDetails(cardId) {
                // Use Vue Router to navigate to the card details page
                this.$router.push({ path: '/carddetails', query: { id: cardId } });
            },
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
            openModal(index) {
                // Set the clicked card's modal state to true
                this.showModal[index] = true;
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