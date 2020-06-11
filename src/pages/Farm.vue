<template>
  <div class="container">
    <div class="buttons">
      <button v-if="user.uid" @click="createCarrot" class="carrot up">
        🥕
      </button>
      <button v-if="user.uid" @click="deleteAllCarrots" class="carrot up">
        🗑
      </button>
    </div>
    <transition-group tag="div" name="carrots" class="carrots">
      <carrot v-for="carrot in carrots" :key="carrot['.key']" :carrot="carrot" @delete-carrot="deleteCarrot"></carrot>
    </transition-group>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import firebase from '@/firebase'
import Carrot from '@/components/Carrot'

export default {
  name: 'Farm',
  components: {
    Carrot,
  },
  computed: {
    ...mapState({
      user: 'user',
      carrots: 'carrots',
    })
  },
  methods: {
    createCarrot: function () {
      this.$store.dispatch('createCarrot')
    },
    deleteCarrot: function (key) {
      this.$store.dispatch('deleteCarrot', key)
    },
    deleteAllCarrots: function () {
      this.$store.dispatch('deleteAllCarrots')
    },
  },
  created: function () {
    this.$store.dispatch('setFarm', this.$route.params.farmId)
  },
  mounted: function () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('setUser', {
          'uid': user.uid,
        })
        this.$store.dispatch('bindCarrots')
      } else {
        this.$store.dispatch('clearUser')
        firebase.auth().signInAnonymously().catch((err) => {
          console.log(`${err.code}: ${err.message}`)
          this.$store.dispatch('clearUser')
        });
      }
    });
  },
  beforeDestroy: function () {
    this.$store.dispatch('unbindCarrots')
  },
}
</script>

<style>
.buttons {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  text-align: center;
}

.up {
  background-color: #fff;
  outline: none;
  transition: box-shadow .15s;
  margin-bottom: 0;
}

.up:hover {
  box-shadow: 0px 2px 8px #ced4da;
}

.up:active {
  border-color: #868e96;
}

.up:focus {
  outline: none;
}

.carrots {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

/* Animation */

.carrots-enter {
  opacity: 0;
  transform: translateY(-40px);
}

.carrots-enter-active {
  z-index: -1;
}

.carrots-leave-to {
  opacity: 0;
  transform: translateY(40px);
}

.carrots-leave-active {
  z-index: -1;
}
</style>
