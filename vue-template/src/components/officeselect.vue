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
      <b-button variant="right" size="lg" @click="routing()">
        <font-awesome-icon icon="hand-point-right"/>
      </b-button>
    </b-container>
  </div>
</template>

<script>
import store from '@/store.js';
import axiosBase from "axios";
let axios;
export default {
  name: "office",
  data() {
    return {
      seat: "",
      office: "",
      options: [
        { text: "銀座", value: "ginza" },
        { text: "丸ノ内", value: "marunouti" }
      ]
    };
  },
  methods: {
    routing: function() {
      if (this.$data.office == "ginza") {
        this.$store.state.office = 'ginza'
      } else if (this.$data.office === "marunouti") {
        this.$store.state.office = 'marunouti'
      }
      this.$router.push("/office");
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
