    <template>
        <div id="map" ref="basicMapbox"></div>
    </template>
<script>
import mapboxgl from 'mapbox-gl';

export default {
  props: {
    latitud: {
      type: Number,
      default: 40.5238136,
    },
    longitud: {
      type: Number,
      default: -3.6593019,
    },
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
        center: [this.longitud, this.latitud],
        zoom: 10,
        style: 'mapbox://styles/zergiales/cl3bqhxaz000515jtbhj65ma3',
      });
      console.log(map);
    },
  },
};
</script>
    <style>
    #map{
      width: 100%;
      height:500px;
    }
    </style>
