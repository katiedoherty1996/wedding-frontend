<template>
    <q-dialog
      v-model="isOpen"
      :class="modalOverlay"
    >
      <q-card style="width: 600px; height:auto;" :class="modalColourPrimary">
        <q-card-section :class="modalText">
          <div v-if="sent" class="text-h6">Message Sent</div>
          <div v-else class="text-h6">Message Failed To Send</div>
        </q-card-section>

        <q-card-section class="q-pt-none" :class="modalText">
          <span v-if="sent">We have recieved your email and will be in touch shortly.</span>
          <span v-else>Your message failed to send. Please email mandjdoherty@gmail.com or call (061)383436</span>
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
        sent: {
          type: Boolean,
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
            return !this.sent ? 'bg-red-3' : 'bg-light-green-3';
        },
        modalColourSecondary(){
            return !this.sent ? 'bg-red-2' : 'bg-light-green-2';
        },
        modalText(){
            return !this.sent ? 'text-red-10' : 'text-green-10';
        },
        modalOverlay(){
          return !this.sent ? 'error-overlay' : 'success-overlay'
        }

    },
    method: {
        closeDialog() {
            this.isOpen = false;
        }
    }
})
</script>
