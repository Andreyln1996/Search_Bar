<template>
  <div class="content-area">
    <div
        v-for="(user, i) in USERS" :key="i"
        class="content-area__user"
        @click="userPage(user.domain)">

      <img
          :src="user.photo_100"
          class="content-area__photo-user"
          alt="Фото"/>

      <div class="content-area__name-user">
        {{ user.first_name }} {{ user.last_name }}
      </div>

    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: "ContentArea",
  computed: mapGetters(["USERS"]),

  methods: {
    ...mapMutations(["updateId"]),
    ...mapActions(['getUser']),

    userPage(id) {
      this.getUser(id)
      this.$router.push(id)
    }
  }
}
</script>

<style lang="scss">
.content-area {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__user {
    width: 250px;
    height: 100px;
    background-color: #8ee78e;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
  }

  &__photo-user {
    border-radius: 50%;
  }

  &__name-user {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 100px;
    padding: 0 10px;
  }
}
</style>