<template>
    <div v-if="showAnimationLoader" class="page-overlay flex flex-center items-center">
        <LottieAnimation :animationData="animationData" />
    </div>
</template>

<style>
.page-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 9999; 
    height: 100%; 
}
</style>

<script>
import LottieAnimation from 'components/LottieAnimation.vue';

export default {
    name: 'LottieLoader',
    components: {
        LottieAnimation
    },
    data(){
        return {
        }
    },
    props: {
        showAnimationLoader: {
            type: Boolean,
            required: true
        },
        animationData: {
            type: Object,
            required: true
        }
    },
};
</script>