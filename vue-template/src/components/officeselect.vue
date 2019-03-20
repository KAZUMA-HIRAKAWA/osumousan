<template>
  <div class="office">
    <h1>どちらの座席表をみますか？</h1>
    <b-container>
      <b-form-group label>
        <b-form-radio-group
          id="btnradios"
          buttons
          button-variant="outline-success"
          size="lg"
          v-model="office"
          :options="options"
          name="radioBtnOutline"
        />
      </b-form-group>
    </b-container>
    <b-container>
      <b-button variant="right" size="lg" v-on:click="routing()">
        <font-awesome-icon icon="hand-point-right"/>
      </b-button>
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
      options: [
        { text: "銀座", value: "ginza" },
        { text: "丸ノ内", value: "maru" }
      ]
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
