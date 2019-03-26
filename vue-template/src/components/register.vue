<template>
  <div class="office">
    <h1>座席予約</h1>
    <b-container>
      ここにテキストボックス
    </b-container>
  </div>
</template>

<script>
import axiosBase from "axios";
let axios;
export default {
  name: "HelloWorld",
  data() {
    return {
      seat: "",
      office: "",
    };
  },
  methods: {
    routing: function() {
      if(this.$data.office=='ginza'){
      this.$router.push('/ginza');
      }else if(this.$data.office==='maru'){
        this.$router.push('/maru');
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
