<template>
  <div>
    <section>
      <UserProfile :info="fetchedItem">
        <div slot="username">{{ fetchedItem.user }}</div>
        <template slot="time">{{ fetchedItem.time_ago }}</template>
      </UserProfile>
    </section>
    <section>
      <div v-html="fetchedAskDetail.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue";
export default {
  created() {
    const askId = this.$route.params.id;
    this.$store.dispatch("FETCH_ASK_DETAIL", { data: askId });
  },
  components: { UserProfile },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
