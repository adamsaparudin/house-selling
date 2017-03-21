<template lang="html">
    <div class="container">
      <Heading></Heading>
        <section class="main">
          <h1>List House for Sale</h1>
          <input type="text" name="" value="" placeholder="Masukan lokasi yang diinginkan">
          <button>Find</button>
          <div class="list-house">
            <h2>For Sale</h2>
            <House></House>
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



</style>
