<template>
  <ul class="item-list">
    <li v-for="item in listItems" v-bind:key="item.id" class="post">
      <div class="points">
        {{ item.points || 0 }}
      </div>
      <div>
        <p class="item-title">
          <template v-if="item.domain">
            <a :href="item.url">{{ item.title }}</a
            ><small class="link-text" v-if="item.domain"
              >({{ item.domain }})</small
            >
          </template>
          <template v-else>
            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link
            ><small
              ><a class="link-text" :href="item.domain" v-if="item.domain"
                >({{ item.domain }})</a
              ></small
            >
          </template>
        </p>
        <small v-if="item.user" class="link-text">
          by
          <router-link :to="`/user/${item.user}`" class="link-text">{{
            item.user
          }}</router-link>
        </small>
        <small v-if="item.time_ago" class="link-text">
          {{ item.time_ago }}
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ listItems: "fetchedList" }),
  },
};
</script>

<style scoped>
.item-list {
  padding: 0;
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-text {
  color: #828282;
}
.item-title {
  margin: 0;
}
</style>
