<template lang="html">
  <div class="head-wrapper">
  <div class="Heading">
    <h1>Zeelow</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Add House
        </a></li>
      </ul>
    </nav>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">

  .head-wrapper {
    width: 100%;
    height: 60px;
    background-color: #f4f4f4;
    border-top: 1px solid #a8a8a8;
  }

  .Heading {
    margin: 0 auto;
    padding: 0 20px;
    width: 1060px;
  }

  .Heading h1 {
    font-size: 24px;
    color: #0f8bff;
    float: left;
    margin-right: 20px;
  }

  .Heading nav {
    float: right;
  }

  .Heading nav ul li {
    float: left;
    list-style: none;
    margin-right: 10px;
    margin-top: 5px;
  }

  .Heading nav ul li a {
    text-decoration: none;
    color: #3d3d3d;
  }

</style>
