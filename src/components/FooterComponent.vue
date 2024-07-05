<template>
    <q-footer elevated class="footer-background text-white q-pa-lg">
        <div class="row footer-content mdi-align-horizontal-center">

          <!--Contact Us Section -->
            <!-- <div class="col-xs-12 col-sm-3 col-md-3">
                <h6 class="text-h6">Contact Us</h6>
                <p>
                  We are a small family run business who supply elegant and affordable wedding stationary.
                </p>
                
            </div> -->
            <div class="col-xs-12 col-sm-3 col-md-3">
              <h6 class="text-h6">Contact Us</h6>
                <div>
                    <span label="Name">Name: </span>
                    <span>Mary Doherty</span>
                </div>
                <div>
                    <span label="Name">LandLine: </span>
                    <span>061-383436</span>
                </div>
                <div>
                    <span label="Name">Mobile: </span>
                    <span>0857767603</span>
                </div>
            </div>

             <!-- Location Section -->
            <div class="col-xs-12 col-sm-3">
                <h6 class="text-h6">Location</h6>
            </div>

            <!--Wedding Stationery -->
            <div class="col-xs-12 col-sm-3">
                <h6 class="text-h6">Wedding Stationary</h6>
                <q-list dense>
                    <q-item clickable v-ripple>
                        <q-item-section>Wedding Invitations</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                        <q-item-section>Ceremony Booklets</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                        <q-item-section>Thank You Cards</q-item-section>
                    </q-item>
                </q-list>
            </div>

            <!-- Follow Us Section -->
            <div class="col-xs-12 col-sm-3">
                <div class="flex items-center">
                  <h6 class="col-6">Follow Us: </h6>
                  <q-btn-group>
                      <q-btn icon="facebook" color="white" flat round />
                      <q-btn icon="camera" color="white" flat round />
                  </q-btn-group>
                </div>
            </div>
        </div>
    </q-footer>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FooterComponent',
});
</script>

<style scoped>
.text-h6 {
   margin-bottom: 8px;
}

.footer-background {
  background-image: url('images/wooden-background.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 450px;
}

.footer-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the color and opacity for the overlay */
  z-index: 1;
}

.footer-content {
  position: relative;
  z-index: 2;
}
</style>