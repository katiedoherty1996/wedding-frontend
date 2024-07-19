<template>
    <div ref="lottieContainer" class="lottie-animation"></div>
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
            default: false
        },
        progress: {
            type: Number,
            default: 0
        }
  },
  watch: {
    progress(newValue) {
        this.setAnimationProgress(newValue);
    }
  },
  mounted() {
        this.loadAnimation();
  },
  methods: {
    loadAnimation() {
        this.animation = lottie.loadAnimation({
            container: this.$refs.lottieContainer,
            renderer: 'svg',
            loop: this.loop,
            autoplay: this.autoplay,
            animationData: this.animationData
        });

        this.setAnimationProgress(this.progress);
    },
    setAnimationProgress(progress) {
        if (this.animation) {
            const frame = this.animation.totalFrames * progress;
            this.animation.goToAndStop(frame, true);
        }
    }
  }
};
</script>

<style scoped>
.lottie-animation {
  width: 100%;
  height: 100%;
}
</style>
