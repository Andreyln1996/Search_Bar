<template>
  <div class="app">
    <div class="app__container">
      <div class="app__header">
        <input
            v-on:keyup.enter="reset()"
            v-model.lazy="userName"
            type="text"
            class="app__input"
            placeholder="Поиск">
      </div>
    </div>

    <router-view/>

  </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
  name: 'App',

  computed: {
    ...mapState(['name','count']),

    userName: {
      get () {
        return this.name
      },

      set (value) {
        this.updateName(value)
      }
    }

  },

  created() {
    document.addEventListener('scroll', this.fullScroll);
  },

  beforeDestroy() {
    document.removeEventListener('scroll', this.fullScroll)
  },

  methods: {
    ...mapActions(["fetchUsers"]),
    ...mapMutations(["updateName","updateCount","resetCount"]),

    reset () {
      this.resetCount()
      this.fetchUsers()
      window.scrollTo(0,0)
    },

    fullScroll() {

      if (document.documentElement.scrollHeight ===
          document.documentElement.scrollTop +
          document.documentElement.clientHeight)
      {
        this.updateCount()
        this.fetchUsers()
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
