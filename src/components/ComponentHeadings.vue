<template>
    <div class="text-center p-4">
        <h2 class="allura">{{ heading }}</h2>
        <div class="d-flex justify-content-center">
            <q-separator color="black" size="2" style="width: 50%;"/>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'; 

export default defineComponent({
    name: "ComponentHeader",
    props: {
        heading: String,
    }
});
</script>