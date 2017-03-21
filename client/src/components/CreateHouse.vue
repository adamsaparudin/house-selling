<template lang="html">
    <div class="container">
      <Heading></Heading>
        <section class="main">
          <h1>List House for Sale</h1>
          <input type="text" name="" value="" placeholder="Masukan lokasi yang diinginkan">
          <button>Find</button>
          <div class="list-house">
            <h2>Create House</h2>
            <form>
              <label for="">Name : <input type="text" v-model="house.name" value=""></label><br><br>
              <label for="">Price : <input type="text" v-model="house.price" value=""></label><br><br>
              <label for="">Address : <input type="text" v-model="house.address" value=""></label><br><br>
            </form>
            <div id="map">

            </div>
            <br>
            <p>
              <span>Coordinates</span> <br>
              {{ $parent.$parent.lat }} <br>
              {{ $parent.$parent.lng }} <br>
            </p>
            <button v-on:click="postHouse">Masukin Bang</button>
          </div>

          <div class="sidebar">
            <h3>List new added property</h3>
          </div>
        </section>

        <div class="clear"></div>
      <Foot></Foot>
    </div>
</template>

<script>
import Heading from './Heading'
import Foot from './Foot'
import House from './House'



export default {

  data() {
    return {
      house: {
        name: '',
        price: '',
        address: ''
      }
    }
  },
  methods: {
    postHouse() {
      this.axios.post('http://localhost:3000/api/house', {
        name: this.house.name,
        price: this.house.price,
        address: this.house.address,
        latitude: this.$parent.$parent.lat,
        longitude: this.$parent.$parent.lng
      })
      .then( (res) => {
        console.log(res);
        window.location.href='/create'
      }).catch( (err) => {
        console.log(err);
      })
    },
    getParent() {
      console.log(this.$parent.$parent.lat);
    }
  },
  components: {
    Heading,
    Foot,
    House
  }

}
</script>

<style lang="css">

  .clear {
    clear: both;
  }

  .main {
    width: 1060px;
    margin: 0 auto;
    border: 1px solid black;
  }

  .list-house {
    margin-top: 20px;
    width: 760px;
    float: left;
  }

  .sidebar {
    width: 290px;
    float: right;
    border: 1px solid black;
    min-height: 200px;
  }

  #map {
    margin-top: 20px;
    width: 500px;
    height: 400px;
  }

</style>
