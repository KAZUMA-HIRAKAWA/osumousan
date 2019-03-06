<template>
  <div class="office">
    <h1>希望の座席を選んでください</h1>
    <b-container>
      <b-row>
        <b-col>
          <b-button variant="outline-success" v-on:click="addseat('1')" class="btn-circle-flat">1</b-button>
        </b-col>
        <b-col>
          <b-button variant="outline-success" v-on:click="addseat('2')" class="btn-circle-flat">2</b-button>
        </b-col>
        <b-col>
          <b-button variant="outline-success" v-on:click="addseat('3')" class="btn-circle-flat">3</b-button>
        </b-col>
        <b-col>
          <b-button variant="outline-success" v-on:click="addseat('4')" class="btn-circle-flat">4</b-button>
        </b-col>
      </b-row>
      <b-row class="desk">
        <b-col col>机</b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button variant="outline-success" class="btn-circle-flat" disabled>5</b-button>
        </b-col>
        <b-col>
          <b-button variant="outline-success" class="btn-circle-flat" disabled>6</b-button>
        </b-col>
        <b-col>
          <b-button variant="outline-success" class="btn-circle-flat" disabled>7</b-button>
        </b-col>
        <b-col>
          <b-button variant="outline-success" class="btn-circle-flat" disabled>8</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      seat: [],
      office: '',
      apigateway: 'https://6yf8nnfen1.execute-api.ap-northeast-1.amazonaws.com/test/reservePosition'
    }
  },
  methods: {
    addseat: async function(select) {
      let that=this
      let today=new Date()
      let year=today.getFullYear()
      let month = ("0"+(today.getMonth() + 1)).slice(-2)
      let date =  ("0"+today.getDate()).slice(-2)
      let seat = year + month + date + select
      axios
        .post(
          this.apigateway,
          {
            seat: seat
          },
        )
        .then(async function(response) {
          /*selectを会話上に返したい*/
          liff.closewindow()

        })
        .catch(error => {
      
    },
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

#btnradios{
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
  transition: .4s;
}

.desk{
  border: solid 2px #a08d70
}
</style>
