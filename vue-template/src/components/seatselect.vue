<template>
  <div class="office">
    <h1 v-if="this.$store.state.office ==='ginza'">希望の座席を選んでください@銀座</h1>
    <h1 v-if="this.$store.state.office ==='marunouti'">希望の座席を選んでください@丸ノ内</h1>
    <b-container>
      <b-row>
        <b-col v-if="seat1">
          <b-button
            variant="outline-success"
            @click="referSeat(seat1)"
            class="btn-circle-flat reserved"
          >1</b-button>
        </b-col>
        <b-col v-else>
          <b-button variant="outline-success" @click="addSeat(1)" class="btn-circle-flat">1</b-button>
        </b-col>
        <b-col v-if="seat2">
          <b-button
            variant="outline-success"
            @click="referSeat(seat2)"
            class="btn-circle-flat reserved"
          >2</b-button>
        </b-col>
        <b-col v-else>
          <b-button variant="outline-success" @click="addSeat(2)" class="btn-circle-flat">2</b-button>
        </b-col>
        <b-col v-if="seat3">
          <b-button
            variant="outline-success"
            @click="referSeat(seat3)"
            class="btn-circle-flat reserved"
          >3</b-button>
        </b-col>
        <b-col v-else>
          <b-button variant="outline-success" @click="addSeat(3)" class="btn-circle-flat">3</b-button>
        </b-col>
        <b-col v-if="seat4">
          <b-button
            variant="outline-success"
            @click="referSeat(seat4)"
            class="btn-circle-flat reserved"
          >4</b-button>
        </b-col>
        <b-col v-else>
          <b-button variant="outline-success" @click="addSeat(4)" class="btn-circle-flat">4</b-button>
        </b-col>
      </b-row>
      <b-row class="desk">
        <b-col col>机</b-col>
      </b-row>
      <b-row>
        <b-col v-if="seat5">
          <b-button
            variant="outline-success"
            @click="referSeat(seat5)"
            class="btn-circle-flat reserved"
          >5</b-button>
        </b-col>
        <b-col v-else>
          <b-button variant="outline-success" @click="addSeat(5)" class="btn-circle-flat">5</b-button>
        </b-col>
        <b-col v-if="seat6">
          <b-button
            variant="outline-success"
            @click="referSeat(seat6)"
            class="btn-circle-flat reserved"
          >6</b-button>
        </b-col>
        <b-col v-else>
          <b-button variant="outline-success" @click="addSeat(6)" class="btn-circle-flat">6</b-button>
        </b-col>
        <b-col v-if="seat7">
          <b-button
            variant="outline-success"
            @click="referSeat(seat7)"
            class="btn-circle-flat reserved"
          >7</b-button>
        </b-col>
        <b-col v-else>
          <b-button variant="outline-success" @click="addSeat(7)" class="btn-circle-flat">7</b-button>
        </b-col>
        <b-col v-if="seat8">
          <b-button
            variant="outline-success"
            @click="referSeat(seat8)"
            class="btn-circle-flat reserved"
          >8</b-button>
        </b-col>
        <b-col v-else>
          <b-button variant="outline-success" @click="addSeat(8)" class="btn-circle-flat">8</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import store from '@/store.js';
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
      seat4: "",
      seat5: "",
      seat6: "",
      seat7: "",
      seat8: ""
    };
  },
  async mounted() {
    axios = axiosBase.create({
      baseURL:
        "https://3k020kklx6.execute-api.ap-northeast-1.amazonaws.com/test",
      timeout: 35000,
      headers: {}
    });

    let params;
    if(this.$store.state.office === 'ginza'){
      params = await axios.get(`/ginza`);
    }else if (this.$store.state.office === 'marunouti'){
      params = await axios.get(`/marunouti`);
    }

    let seat1;
    let seat2;
    let seat3;
    let seat4;
    let seat5;
    let seat6;
    let seat7;
    let seat8;

    params.data.Items.forEach(function(value) {
      if (value.position === "1") {
        seat1 = value;
      } else if (value.position === "2") {
        seat2 = value;
      } else if (value.position === "3") {
        seat3 = value;
      } else if (value.position === "4") {
        seat4 = value;
      } else if (value.position === "5") {
        seat5 = value;
      } else if (value.position === "6") {
        seat6 = value;
      } else if (value.position === "7") {
        seat7 = value;
      } else if (value.position === "8") {
        seat8 = value;
      }
    });

    this.seat1 = seat1;
    this.seat2 = seat2;
    this.seat3 = seat3;
    this.seat4 = seat4;
    this.seat5 = seat5;
    this.seat6 = seat6;
    this.seat7 = seat7;
    this.seat8 = seat8;
  },
  methods: {
    addSeat(position) {
      if (window.confirm(`${position}の席を予約しますか？`)) {
        // ここで場所予約の画面に進む
        this.$store.state.position = position;
        this.$router.push("/register");
      }
    },
    referSeat(seat) {
      alert(`予約者名：${seat.name}`);
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
