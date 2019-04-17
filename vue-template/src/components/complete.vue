<template>
  <div class="office">
    <h1>登録完了しました！</h1>
    <b-container>
      <div></div>
    </b-container>
    <b-container>
      <b-button size="lg" @click="top()">トップに戻る</b-button>
    </b-container>
  </div>
</template>


<script>
export default {
  name: 'office',
  data () {
    return {
    }
  },
  methods: {
    top () {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

#btnradios {
  margin-top: 45px;
}
</style>
