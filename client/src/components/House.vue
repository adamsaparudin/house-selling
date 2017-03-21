<template lang="html">
  <div class="house-one">
    <div class="house-image">
      <img src="http://lorempixel.com/300/250/" alt="House image">
    </div>
    <div class="house-meta">
      <h4>Rumah cantik dalam cluster</h4>
      <span>Ciganjur, Jakarta Selatan</span>
      <ul>
        <li>K. Tidur : 3   K.Mandi : 3</li>
        <li>Garasi : 2</li>
        <li>Luas Bangunan : 124.000m2</li>
        <li>Luas Tanah : 150.000m2</li>
      </ul>
      <span class="price">Rp. 2.999.000.000</span>
    </div>
    <div class="details">
      <button type="button" name="button">Contact Agent</button>
      <button type="button" name="button">Save House</button>

      <button type="button" name="button">Details</button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

.house-one {
  width: 100%;
  border: 1px solid black;
  min-height: 280px;
  padding: 10px;
}

.house-image {
  width: 45%;
  float:left;
}

.house-meta {
  width: 55%;
  float: right;
}

.house-meta ul {
  margin: 10px 0;
  padding: 0;
}

.house-meta ul li {
  list-style: none;
}

.details button {

}

</style>
