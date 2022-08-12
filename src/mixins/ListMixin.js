import bus from "../utils/bus.js";

export default {
  async mounted() {
    console.log("mixin bus emit");
    bus.$emit("end:spinner");
  },
};
