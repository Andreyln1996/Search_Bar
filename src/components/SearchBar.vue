<template>

</template>

<script>
import axios from 'axios'

export default {
  name: "SearchBar",

  data() {
    return {
      q: null,
      users: null,
      count: 10
    }
  },

  watch: {
    q() {
      this.count = 10;
      window.scrollTo(0,0)
      console.log(this.q)
      // this.usersSearch()
    }
  },

  created() {
    document.addEventListener('scroll', this.fullScroll);
  },

  beforeDestroy() {
    document.removeEventListener('scroll', this.fullScroll)
  },

  methods: {
    usersSearch() {
      console.log(this.count)
      axios
          .get('http://localhost:8080/method/' +
              'users.search?q=' + this.q + '&count=' +
              this.count + '&fields=photo_100&v=5.52&access_token=cbe' +
              'bfeaff6beba223a8fd89dff8b8fb9a1aff8c0ff7' +
              'fb50ff3b931bb7052e35c0ea46eb65d3e84411fdc3')
          .then(res => (this.users = res.data.response.items))
    },

    fullScroll() {
      if (document.documentElement.scrollHeight ===
          document.documentElement.scrollTop +
          document.documentElement.clientHeight)
      {
        this.count += 10
        this.usersSearch()
      }

    }
  }
}
</script>

<style lang="scss">

.search-bar {

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

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;

  }

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