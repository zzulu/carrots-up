<template>
  <div class="container">
    <div v-if="user.uid" class="buttons">
      <button @click="createCarrot" class="carrot up">🥕</button>
      <button @click="deleteAllCarrots" class="carrot up">🗑</button>
    </div>
    <transition-group tag="div" name="carrots" class="carrots">
      <carrot v-for="carrot in carrots" :key="carrot['.key']"></carrot>
    </transition-group>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
    deleteAllCarrots: function () {
      this.$store.dispatch('deleteAllCarrots')
    },
    askNotificationPermission: function () {
      if (!('Notification' in window)) {
        console.log("This browser does not support notifications.")
      } else {
        Notification.requestPermission((permission) => {
            if (!('permission' in Notification)) {
              Notification.permission = permission
            }
          })
      }
    },
    onAuthStateChanged: function () {
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
          })
        }
      })
    },
  },
  created: function () {
    this.$store.dispatch('setFarmId', this.$route.params.farmId)
  },
  mounted: function () {
    this.askNotificationPermission()
    this.onAuthStateChanged()
  },
  beforeDestroy: function () {
    this.$store.dispatch('clearFarmId')
    this.$store.dispatch('unbindCarrots')
  },
}
</script>

<style>
.buttons {
  position: relative;
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  animation: enter .5s;
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

/* Transitions */

@keyframes enter {
    from {
      opacity: 0;
      transform: translateY(-32px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
}

.carrots-enter {
  opacity: 0;
  transform: translateY(-32px);
}

.carrots-enter-active {
  z-index: -1;
}

.carrots-leave-to {
  opacity: 0;
  transform: translateY(32px);
}

.carrots-leave-active {
  z-index: -1;
}
</style>
