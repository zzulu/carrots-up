<template>
  <div class="carrot">🥕</div>
</template>

<script>
export default {
  name: 'Carrot',
  mounted: function () {
    // alert('Carrots Up!')
    // if (document.hidden) {
    //   new Notification('🥕');      
    // }
  },
}
</script>

<style>
.carrot {
  margin: 0 0.5rem 1rem;
  padding: 1.125rem 2rem;
  border: 1px solid #ced4da;
  border-radius: 16px;
  box-shadow: 0px 2px 8px #e9ecef;
  background-color: #fff;
  font-size: 3rem;
  transition: all .5s;
}
</style>
