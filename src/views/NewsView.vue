<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
// eslint-disable-next-line vue/no-parsing-error
import listMixin from "../mixins/ListMixin";
export default {
  mixins: [listMixin],
  components: {
    ListItem,
  },
};
</script>

<style></style>
