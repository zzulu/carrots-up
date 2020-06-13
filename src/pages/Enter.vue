<template>
  <div class="container">
    <form @submit.prevent="enterTheFarm" :class="{ 'invalid': invalid }" class="form">
      <input v-model="farmId" type="text" class="form__farm" spellcheck="false">
      <button class="form__submit">&darr;</button>
    </form>
  </div>  
</template>

<script>
export default {
  name: 'Enter',
  data: function () {
    return {
      farmId: '',
      invalid: false,
    }
  },
  methods: {
    enterTheFarm: function () {
      if (/^[a-zA-Z0-9_-]+$/.test(this.farmId)) {
        this.$router.push({ name: 'farm', params: { farmId: this.farmId } })
      } else {
        this.invalid = true
      }
    },
  },
  watch: {
    farmId: function () {
      if (this.invalid) {
        this.invalid = false
      }
    },
  },
}
</script>

<style>
.form {
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
}

.form__farm {
  width: 100%;
  max-width: 240px;
  flex-grow: 1;
  margin-right: 0.25rem;
  margin-left: 0.25rem;
  padding: 1.125rem 1.75rem;
  border: 1px solid #ced4da;
  border-radius: 16px;
  box-shadow: 0px 2px 8px #e9ecef;
  background-color: #fff;
  transition: border-color .2s, box-shadow .2s;
  outline: none;
}

.form__farm:focus {
  box-shadow: 0px 2px 8px #ced4da;
}

.form__farm:focus + .form__submit {
  box-shadow: 0px 2px 8px #ffa94d;
}

.form__submit {
  margin-right: 0.25rem;
  margin-left: 0.25rem;
  padding: 1.125rem 1.625rem;
  border: 1px solid #fd7e14;
  border-radius: 16px;
  box-shadow: 0px 2px 8px #ffd8a8;
  background-color: #fd7e14;
  color: #f8f9fa;
  font-weight: bold;
  transition: background-color .2s, border-color .2s, box-shadow .2s;
}

.form__submit:hover {
  background-color: #e8590c;
}

.form__submit:focus {
  outline: none;
}

.invalid::after {
  display: block;
  position: absolute;
  bottom: -2rem;
  content: "Only a-z, A-Z, 0-9, _, - are allowed.";
  color: #495057;
  margin-top: 0.5rem;
}

.invalid > .form__farm {
  border-color: #ff922b;
}
</style>
