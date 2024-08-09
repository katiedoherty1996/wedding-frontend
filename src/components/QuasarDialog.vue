<template>
    <q-dialog
      v-model="isOpen"
      :class="modalOverlay"
    >
      <q-card style="width: 600px; height:auto;" :class="modalColourPrimary">
        <q-card-section :class="modalText">
          <div v-if="success" class="text-h6">Message Sent</div>
          <div v-else class="text-h6">ERROR</div>
        </q-card-section>

        <q-card-section class="q-pt-none" :class="modalText">
            <div>{{message}}</div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal" :class="modalColourSecondary">
          <q-btn :class="modalText" flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return {
        }
    },
    props: {
        show: {
            type: Boolean,
            required: false
        },
        success: {
          type: Boolean,
          required: true,
        },
        message: {
          type: String,
          required: true,
        }
    },
    computed: {
        isOpen: {
            get(){
              return this.show;
            },
            set(val) {
                this.$emit('input', val);
            },
        },
        modalColourPrimary(){
            return !this.success || !isEmpty(this.message) ? 'bg-red-3' : 'bg-light-green-3';
        },
        modalColourSecondary(){
            return !this.success || !isEmpty(this.message) ? 'bg-red-2' : 'bg-light-green-2';
        },
        modalText(){
            return !this.success || !isEmpty(this.message) ? 'text-red-10' : 'text-green-10';
        },
        modalOverlay(){
          return !this.success || !isEmpty(this.message) ? 'error-overlay' : 'success-overlay'
        }

    },
    method: {
    }
})
</script>
