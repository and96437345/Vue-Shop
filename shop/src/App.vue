<script setup>
import Header from './components/Header.vue'
import Banners from './components/Banners.vue'
import ProductList from './components/ProductList.vue'
import axios from 'axios'
import FlyBasket from './components/FlyBasket.vue'
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <FlyBasket />
      <Header />
      <Banners />
      <ProductList />
      <!-- <Catalog /> -->
    </div>
  </div>
</template>

<style>
body {
  background: #e7f6ff;
  padding-top: 85px;
}
.wrapper {
  max-width: 1080px;
  margin: 0 auto;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  min-height: 90vh;
}
.container {
  max-width: 960px;
  margin: 0 auto;
  width: 96%;
}
</style>
