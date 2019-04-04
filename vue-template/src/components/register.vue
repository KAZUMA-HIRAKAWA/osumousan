<template>
  <div class="office">
    <h1>座席予約</h1>
    <b-container>
      <b-input v-model="name" placeholder="氏名"></b-input>
      <div></div>
      <b-button @click="register(name)">登録</b-button>
    </b-container>
  </div>
</template>

<script>
import store from '@/store.js';
import axiosBase from "axios";
let axios;
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "",
    };
  },
  async mounted() {
    axios = axiosBase.create({
      baseURL:
        "https://3k020kklx6.execute-api.ap-northeast-1.amazonaws.com/test",
      timeout: 35000,
      headers: {}
    });
  },

  methods: {
    async register(name) {
      try{
      if (window.confirm(`登録しますか？`)) {
        if(this.$store.state.office === 'ginza'){
          await axios.put(`/ginza`, {
            name: name,
            position: this.$store.state.position,
          });
        } else if (this.$store.state.office === 'marunouti'){
          await axios.put(`/marunouti`, {
            name: name,
            position: this.$store.state.position,
          });
        }
          this.$router.push('/complete');
      }
      }catch(e){
        return;
      }
    }
  }
};
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
