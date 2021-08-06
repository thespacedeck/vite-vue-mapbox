<template>
  <div style="width: 1000px; height: 600px">
    <tt-tooltip :position="'bottom'" :show="true">
      <h1>HELOO TOOLTIP</h1>
      <template #content>MMM</template>
    </tt-tooltip>
    <mapbox-map
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
import { ttTooltip } from "@trooptravel/tt-ui-comp-lib/src/components";

export default defineComponent({
  name: "App",
  components: {
    MapboxMap,
    ttTooltip,
  },
  setup() {
    let mapOptions = {
      accessToken: import.meta.env.VITE_MAPBOX_API_KEY,
      mapPromise: ($event: any) => {},
      updateCentre: ($event: any) => {},
      updatePitch: ($event: any) => {},
      updateZoom: ($event: any) => {},
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
