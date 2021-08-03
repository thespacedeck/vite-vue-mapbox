<template>
  <div style="width: 1000px; height: 600px">
    <mapbox-map
      @click="clickMap"
      :accessToken="mapOptions.accessToken"
      @loaded="mapOptions.mapPromise($event)"
      @update:center="mapOptions.updateCentre($event)"
      @update:pitch="mapOptions.updatePitch($event)"
      @update:zoom="mapOptions.updateZoom($event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MapboxMap } from "vue-mapbox-ts";

export default defineComponent({
  name: "App",
  components: {
    MapboxMap,
  },
  setup() {
    let mapOptions = {
      accessToken: import.meta.env.VITE_MAPBOX_API_KEY,
    };

    return {
      mapOptions,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
