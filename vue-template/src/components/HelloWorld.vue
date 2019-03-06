<template>
  <div class="hello">
    <h1>どこの座席表をみますか？</h1>
    <b-form-select v-model="selected" :options="options" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      seat: '',
      office: '',
      options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
    }
  },
  methods: {
    routing: function(page) {
      this.$router.push(page)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
