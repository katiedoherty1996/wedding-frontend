<template>
    <div class="text-center q-pb-lg q-pt-xl">
        <div class="allura" style="font-size:60px;">{{ heading }}</div>
        <div class="flex justify-center">
            <q-separator align="center" color="black" size="2" style="width: 40%;"/>
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