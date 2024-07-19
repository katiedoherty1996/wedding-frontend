<template>
    <q-footer elevated class="footer-background text-white q-pl-xl q-pr-xl q-pt-md q-pb-lg">
        <div class="row footer-content">
            <!-- Location Section -->
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 q-pb-lg q-pr-sm" id="location">
                <h5><b>Location</b></h5>
                <GoogleMap 
                    address="5 Saint Johns Terrace, Hospital, Co. Limerick"
                />
            </div>

            <div class="quattrocento col-xs-12 col-sm-6 col-md-3 q-pb-lg">
                <h5 class="quattrocento"><b>Address</b></h5>
                <span class="text-subtitle1">Main Street, <br/>
                Hospital, <br/>
                Co. Limerick <br/>
                V35 NH74</span>
            </div>
            
            <div class="col-xs-12 col-sm-6 col-md-3 col-12">
              <h5 class="quattrocento"><b>Contact Us</b></h5>
                <div class="q-mt-sm quattrocento text-subtitle1">
                    <span label="Name">Name: </span>
                    <span>Mary Doherty</span>
                </div>
                <div class="q-mt-sm quattrocento text-subtitle1">
                    <span label="LandLine">LandLine: </span>
                    <span>(061) 383436</span>
                </div>
                <div class="q-mt-sm quattrocento text-subtitle1">
                    <span label="Mobile">Mobile: </span>
                    <span>0857767603</span>
                </div>
                <!-- Follow Us Section -->
                <div class="quattrocento text-subtitle1">
                  <span label="Follow Us">Follow Us: </span>
                  <q-btn-group>
                      <q-btn icon="facebook" color="white" flat round />
                      <q-btn icon="camera" color="white" flat round />
                  </q-btn-group>
                </div>
            </div>

            <!--Wedding Stationery -->
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-12 q-pb-lg">
                <h5><b>Wedding Stationery</b></h5>
                <q-list dense>
                    <q-item class="text-subtitle1" clickable v-ripple>
                        <q-item-section>Wedding Invitations</q-item-section>
                    </q-item>
                    <q-item class="text-subtitle1" clickable v-ripple>
                        <q-item-section>Ceremony Booklets</q-item-section>
                    </q-item>
                    <q-item class="text-subtitle1" clickable v-ripple>
                        <q-item-section>Thank You Cards</q-item-section>
                    </q-item>
                </q-list>
            </div>
        </div>
    </q-footer>
</template>

<script>
import GoogleMap from 'components/GoogleMap.vue'; 

export default {
  components: {
    GoogleMap
  }
};
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