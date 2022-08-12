import ListView from "./ListView.vue";
import bus from "../utils/bus.js";

export default (name) => {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name: name + "ListHocComponent",
    async created() {
      bus.$emit("start:spinner");
      await this.$store.dispatch("FETCH_LIST", { data: this.$route.name });
      bus.$emit("end:spinner");
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
};
