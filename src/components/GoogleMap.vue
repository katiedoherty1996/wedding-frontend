<template>
    <div class="google-map">
        <div ref="mapContainer" class="map-container"></div>
    </div>
</template>

<script>
export default {
    name: 'GoogleMap',
    props: {
        address: {
            type: String,
            required: true
        },
        zoom: {
            type: Number,
            default: 15
        },
        apiKey: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            map: null,
            geocoder: null,
            marker: null
        };
    },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            // Load the Google Maps API script
            const apiKey = import.meta.env.VITE_API_KEY;
            const googleMapsScript = document.createElement('script');
            googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
            googleMapsScript.defer = true;
            googleMapsScript.async = true;
            googleMapsScript.onload = () => {
                this.geocoder = new google.maps.Geocoder();
                this.map = new google.maps.Map(this.$refs.mapContainer, {
                center: { lat: 0, lng: 0 }, // Default center (will be updated after geocoding)
                zoom: this.zoom,
                });
                this.geocodeAddress();
            };
            document.head.appendChild(googleMapsScript);
        },
        geocodeAddress() {
        this.geocoder.geocode({ address: this.address }, (results, status) => {
            if (status === 'OK' && results[0]) {
            const location = results[0].geometry.location;
            this.map.setCenter(location);
            this.marker = new google.maps.Marker({
                map: this.map,
                position: location,
                title: this.address
            });
            } else {
            console.error('Geocode was not successful for the following reason:', status);
            }
        });
        }
    }
};
</script>

<style scoped>
.google-map {
    width: 100%;
    height: 270px; 
}
.map-container {
    width: 100%;
    max-width:300px;
    height: 100%;
}
</style>
