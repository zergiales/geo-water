    <template>
  <div>
    <div id="map"></div>
  </div>
</template>
<script>
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

export default {
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
        // Limitar la posicion a españa
        countries: 'esp',
        center: [-3.6593019, 40.5238136], // posicion inicial
        zoom: 16,
        pitch: 45,
        style: 'mapbox://styles/zergiales/cl3bqhxaz000515jtbhj65ma3',
      });
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        types: 'poi',
        render(item) {
          // extract the item's maki icon or use a default
          const maki = item.properties.maki || 'marker';
          return `<div class='geocoder-dropdown-item'>
          <img class='geocoder-dropdown-icon' src='https://unpkg.com/@mapbox/maki@6.1.0/icons/${maki}-15.svg'>
          <span class='geocoder-dropdown-text'>
          ${item.text}
          </span>
          </div>`;
        },
        mapboxgl,
      });
      map.addControl(geocoder);
      // para añadir la geolocalizacion del mapa
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          // When active the map will receive updates to the device's location as it changes.
          trackUserLocation: true,
          // Draw an arrow next to the location dot to indicate
          // which direction the device is heading.
          showUserHeading: true,
        }),
      );
      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl());
    },
  },
};
</script>
<style>
/*mapa en si */
#map {
  position: absolute;
  width: 50%;
  height: 500px;
  border-radius: 15px;
}

/*icono de la geolocalizacion */
.mapboxgl-ctrl button.mapboxgl-ctrl-geolocate .mapboxgl-ctrl-icon {
  background-color: white;
}

/*input del buscador */
.geocoder-dropdown-item {
  padding: 5px;
}

.geocoder-dropdown-icon {
  margin-right: 10px;
}

.geocoder-dropdown-text {
  color: #5a3fc0;
  font-family: defecto;
  font-size: larger;
}

/*buscador */
.mapboxgl-ctrl-geocoder {
  width: 250px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
}

.mapboxgl-ctrl-geocoder:hover {
  transition: 1s ease-in;
  cursor: pointer
}

.mapboxgl-ctrl-geocoder:focus {
  text-decoration: none;
}

/*lo que sale cuando le damos a las opciones */
.geocoder-dropdown-text {
  color: white;
}

.mapboxgl-ctrl-geocoder .suggestions {
  background-color: #3f51b59d;
}

/*para que no se vea las letras de mapbox */
.mapboxgl-ctrl-attrib-inner {
  display: none;
}

.mapboxgl-ctrl-logo {
  display: none !important;
}

/*para que en el desplegable se cambie el color */
.mapboxgl-ctrl-geocoder .suggestions>.active>a,
.mapboxgl-ctrl-geocoder .suggestions>li>a:hover {
  background-color: #3f51b5;
}

/*para quitar un link */
.mapboxgl-ctrl-geocoder--powered-by {
  display: none !important;
}
</style>
