import bus from "../utils/bus.js";

export default {
  async mounted() {
    bus.$emit("end:spinner");
  },
};
