    <template>
      <div class="mapa">
        <div ref="basicMapbox" :style="mapSize"></div>
      </div>
    </template>
<script>
import mapboxgl from 'mapbox-gl';

export default {
  props: {
    mapWidth: {
      type: String,
    },
    mapHeight: {
      type: String,
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
        container: this.$refs.basicMapbox,
        style: 'mapbox://styles/zergiales/cl3bqhxaz000515jtbhj65ma3',
      });
      console.log(map);
    },
  },
  computed: {
    mapSize() {
      const styleObj = {
        width: this.mapWidth,
        height: this.mapHeight,
      };
      return styleObj;
    },
  },
};
</script>
    <style>
    .mapboxgl-map{
      width:100vw;
      height:100vh;
    }
    @import url('https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css');
    </style>
