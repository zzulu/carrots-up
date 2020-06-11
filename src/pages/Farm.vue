<template>
  <div class="container">
    <div class="buttons">
      <button @click="createCarrot" class="carrot up">
        &#x1F955;
      </button>
    </div>
    <div class="carrots">
      <Carrot v-for="carrot in carrots" :key="carrot['.key']"></Carrot>
    </div>
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
      carrots: 'carrots',
    })
  },
  methods: {
    createCarrot: function () {
      this.$store.dispatch('createCarrot', this.$route.params.farmId)
    },
  },
  mounted: function () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('setUser', {
          'uid': user.uid,
        })
        this.$store.dispatch('bindCarrots', this.$route.params.farmId)
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
  padding-top: 1rem;
  padding-bottom: 1rem;
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
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
