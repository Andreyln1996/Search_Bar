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

      {{ user.first_name }}

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

  // async beforeRouteEnter(to, from, next) {
  //   if(from && from.matched && from.matched.length > 0) {
  //     const store = from.matched[0].instances.default.$store;
  //     await store.dispatch('getUser', 'andrey_l_n');
  //   }
  //   next( () => {
  //     // console.log('next exec', vue.$store);
  //     // vue.$store.dispatch('getUser', 'andrey_l_n')
  //     // vue.getUser('andrey_l_n')
  //   })
  // }
}
</script>

<style lang="scss">

</style>