    <template>
      <v-main>
        <div  id="map" class="elevation-12 rounded-xl " ref="basicMapbox"></div>
      </v-main>
    </template>
<script>
import {
  MglMap,
} from 'vue-mapbox';
import mapboxgl from 'mapbox-gl';
import MglGeocoderControl from 'vue-mapbox-geocoder';

export default {
  components: {
    MglMap,
    MglGeocoderControl,
  },
  data() {
    return {
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    // Inicializar
    init() {
      mapboxgl.accessToken = 'pk.eyJ1IjoiemVyZ2lhbGVzIiwiYSI6ImNsM2JwZmVxcTBkbDQzYnA0czd5bGJpNTgifQ.iK9cRRLuaeol1Vdm2W68_A';
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/zergiales/cl3bqhxaz000515jtbhj65ma3',
      });
      console.log(map);
      // Add the control to the map.
      map.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl,
        }),
      );
    },
  },
};
</script>
    <style>
    .mapboxgl-map{
      width:57%;
      height:500px;
    }
    </style>
