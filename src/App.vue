<template>
  <div class="app">
    <div class="app__container">
      <div class="app__header">
        <input
            v-on:keyup.enter="reset()"
            v-model.lazy="name"
            type="text"
            class="app__input"
            placeholder="Поиск">
      </div>
    </div>

    <router-view/>

  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      name: ''
    }
  },

  created() {
    document.addEventListener('scroll', this.fullScroll);
  },

  beforeDestroy() {
    document.removeEventListener('scroll', this.fullScroll)
  },

  methods: {
    ...mapActions(["searchUsers"]),
    ...mapMutations(["updateCount","resetCount"]),

    reset () {
      if (this.$router.history.current.name === 'userpage')
      {this.$router.push({name: 'content'})}

      window.scrollTo(0,0)
      this.resetCount()
      this.searchUsers(this.name)

    },

    fullScroll() {

      if (document.documentElement.scrollHeight ===
          document.documentElement.scrollTop +
          document.documentElement.clientHeight)
      {
        this.updateCount()
        this.searchUsers(this.name)
      }
    }
  }
}

</script>

<style lang="scss">

.app {

  &__container {
     height: 80px;
   }

  &__header {
     top: 0;
     position: fixed;
     display: flex;
     justify-content: center;
     align-items: center;
     background-color: #0e76ff;
     width: 100%;
     height: 60px;
   }

  &__input {
     width: 50%;
     height: 30px;
     border-radius: 20px;
     outline-style: none;
     border-style: none;
     padding: 0 15px;
   }
}

</style>
