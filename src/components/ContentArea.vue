<template>
  <div class="search-bar">
    <div
        v-for="(user, i) in USERS" :key="i"
        class="search-bar__user">

      <img
          :src="user.photo_100"
          class="search-bar__photo-user"
          alt="Фото"/>

      <div class="search-bar__name-user">
        {{ user.first_name }} {{ user.last_name }}
      </div>

    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "ContentArea",
  computed: mapGetters(["USERS"]),
}
</script>

<style lang="scss">
.search-bar {
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