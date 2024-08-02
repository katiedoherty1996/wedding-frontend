<template>
    <div 
        ref="lottieContainer" 
        class="lottie-animation"
        :style="{ height: containerHeight, width: containerWidth }"
    ></div>
</template>

<script>
import lottie from 'lottie-web';

export default {
    name: 'LottieAnimation',
    props: {
        animationData: {
            type: Object,
            required: true
        },
        loop: {
            type: Boolean,
            default: true
        },
        autoplay: {
            type: Boolean,
            default: true // Set autoplay to true to start the animation on mount
        },
        containerWidth: {
            type: String,
            default: "300px"
        },
        containerHeight: {
            type: String,
            default: "300px"
        }
    },
    watch: {
    },
    mounted() {
        this.loadAnimation();
    },
    methods: {
        loadAnimation() {
            this.animation = lottie.loadAnimation({
                container: this.$refs.lottieContainer,
                renderer: 'svg',
                loop: true,
                autoplay: this.autoplay,
                animationData: this.animationData
            });
        },
    }
};
</script>

<style scoped>
</style>
