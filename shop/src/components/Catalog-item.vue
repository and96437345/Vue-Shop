<script setup>
defineProps({
  title: String
})
</script>

<template>
  <div class="catalog-item">
    <div class="catalog-item__container">
      <div class="catalog-item__image">
        <img alt="" />
      </div>
      <div class="catalog-item__title">{{ title }}</div>
      <div class="catalog-item__priceRow">
        <div class="catalog-item__price">
          <div class="catalog-item__priceTitle">Цена:</div>
          <div class="catalog-item__priceValue">руб.</div>
        </div>
        <button class="catalog-item__button btn">
          <svg class="check-icon">
            <use href="../assets/sprite.svg#icon-plus"></use>
          </svg>
        </button>
      </div>
      <button class="catalog-item__fav btn">
        <svg class="catalog-item__icon">
          <use href="../assets/sprite.svg#icon-red-heart"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<style>
.catalog-item__image {
  max-width: 100%;
  max-height: 112px;
}
.catalog-item {
  width: 25%;
  padding: 20px 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
}
.catalog-item__container {
  position: relative;
  padding: 22px 30px 32px 30px;
  box-sizing: border-box;
  border-radius: 40px;
  border: 1px solid #f8f8f8;
  background: #fff;
  box-shadow: 0px 14px 30px 0px rgba(0, 0, 0, 0.05);
}
.catalog-item__image {
  height: 112px;
}
.catalog-item__image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.catalog-item__title {
  margin: 14px auto;
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.catalog-item__priceRow {
  display: flex;
  justify-content: space-between;
}
.catalog-item__button {
  border: none;
  background-color: #fff;
  width: 32px;
  height: 32px;
}
.catalog-item__priceTitle {
  color: #bdbdbd;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 2px;
}
.catalog-item__priceValue {
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.catalog-item__fav {
  position: absolute;
  left: 30px;
  top: 29px;
  width: 32px;
  height: 32px;
  border-radius: 7px;
  background-color: #fef0f0;
  border: none;
}
.catalog-item__icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 15px;
  width: 15px;
  fill: #ff8585;
}
.check-icon {
  width: 12px;
  height: 12px;
  fill: #d3d3d3;
}
.btn {
  cursor: pointer;
}
</style>
