<template>
  <div class="office">
    <h1>希望の座席を選んでください@銀座</h1>
    <b-container>
      <b-row>
        <b-col v-if="seat1">
          <b-button variant="outline-success" class="btn-circle-flat reserved" disabled>1</b-button>
        </b-col>
        <b-col v-else>
          <b-button variant="outline-success" v-on:click="addSeat('1')" class="btn-circle-flat">1</b-button>
        </b-col>
        <b-col v-if="seat2">
          <b-button variant="outline-success" class="btn-circle-flat reserved" disabled>2</b-button>
        </b-col>
        <b-col v-else>
          <b-button variant="outline-success" v-on:click="addSeat('2')" class="btn-circle-flat">2</b-button>
        </b-col>
        <b-col v-if="seat3">
          <b-button variant="outline-success" class="btn-circle-flat reserved" disabled>3</b-button>
        </b-col>
        <b-col v-else>
          <b-button variant="outline-success" v-on:click="addSeat('3')" class="btn-circle-flat">3</b-button>
        </b-col>
        <b-col v-if="seat4">
          <b-button variant="outline-success" class="btn-circle-flat reserved" disabled>4</b-button>
        </b-col>
        <b-col v-else>
          <b-button variant="outline-success" v-on:click="addSeat('4')" class="btn-circle-flat">4</b-button>
        </b-col>
      </b-row>
      <b-row class="desk">
        <b-col col>机</b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button variant="outline-success" class="btn-circle-flat reserved" disabled>5</b-button>
        </b-col>
        <b-col>
          <b-button variant="outline-success" class="btn-circle-flat reserved" disabled>6</b-button>
        </b-col>
        <b-col>
          <b-button variant="outline-success" class="btn-circle-flat reserved" disabled>7</b-button>
        </b-col>
        <b-col>
          <b-button variant="outline-success" class="btn-circle-flat reserved" disabled>8</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axiosBase from "axios";
let axios;

export default {
  name: "HelloWorld",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*"
  },
  data() {
    return {
      seat1: "",
      seat2: "",
      seat3: "",
      seat4: ""
    };
  },
  async mounted() {
    axios = axiosBase.create({
      baseURL:
        "https://3k020kklx6.execute-api.ap-northeast-1.amazonaws.com/test",
      timeout: 35000,
      headers: {}
    });

    const params = await axios.get(`/`);

    let seat1;
    let seat2;
    let seat3;
    let seat4;

    params.data.Items.forEach(function(value) {
      if (value.date_position.endWith("1")) {
        seat1 = value;
      } else if (value.date_position.endWith("2")) {
        seat2 = value;
      } else if (value.date_position.endWith("3")) {
        seat3 = value;
      } else if (value.date_position.endWith("4")) {
        seat4 = value;
      }
    });

    this.seat1 = seat1;
    this.seat2 = seat2;
    this.seat3 = seat3;
    this.seat4 = seat4;
    console.log("seat1", this.seat1, "seat4", this.seat4);
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

.btn-circle-flat {
  display: inline-block;
  text-decoration: none;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  transition: 0.4s;
}

.reserved {
  color: white;
  background-color: blue;
}

.desk {
  border: solid 2px #a08d70;
}
</style>
