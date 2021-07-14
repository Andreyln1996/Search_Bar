<template>
  <div class="user-page">
    <div
        v-for="(user, i) in this.user" :key="i"
        class="user-page">

      <button
          type="button"
          @click="$router.go(-1)">
        Назад
      </button>

      <img
          :src="user.photo_200"
          alt="Фото"/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: "UserPage",
  methods: mapActions(['getUser']),
  computed: mapState(['user']),
}
</script>

<style lang="scss">

</style>