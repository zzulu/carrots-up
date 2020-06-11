<template>
  <div class="carrot" @click="deleteCarrot">🥕</div>
</template>

<script>
export default {
  name: 'Carrot',
  props: {
    carrot: Object,
  },
  mounted: function () {
    // alert('Carrots Up!')
    // if (document.hidden) {
    //   new Notification('🥕');      
    // }
  },
  methods: {
    deleteCarrot: function () {
      this.$emit('delete-carrot', this.carrot['.key']);
    },
  },
}
</script>

<style>
.carrot {
  margin: 0 0.5rem 1rem;
  padding: 1rem 2rem;
  border: 1px solid #ced4da;
  border-radius: 16px;
  box-shadow: 0px 2px 8px #e9ecef;
  background-color: #fff;
  font-size: 3rem;
  transition: all .5s;
}
</style>
