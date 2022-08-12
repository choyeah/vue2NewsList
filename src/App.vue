<template>
  <div id="app">
    <LoadingSpinner :loading="loadingStatus"></LoadingSpinner>
    <tool-bar></tool-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";
import bus from "./utils/bus.js";

export default {
  name: "App",
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      console.log("startSpinner");
      this.loadingStatus = true;
    },
    endSpinner() {
      console.log("endSpinner");
      this.loadingStatus = false;
    },
  },
  created() {
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
  },
  components: {
    ToolBar,
    LoadingSpinner,
  },
  beforeDestroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
