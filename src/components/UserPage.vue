<template>
  <div>
    <div
        v-for="(user, i) in this.user" :key="i"
        class="user-page">
      <img
          :src="user.photo_max_orig"
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

<style scoped>

</style>