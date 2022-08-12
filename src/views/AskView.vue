<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import listMixin from "../mixins/ListMixin";
export default {
  mixins: [listMixin],
  components: {
    ListItem,
  },
};
</script>

<style></style>
