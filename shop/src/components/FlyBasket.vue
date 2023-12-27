<script setup>
import { inject } from 'vue'

const { closeFlyBasket } = inject('cartActions')
</script>

<template>
  <div class="flybasket">
    <div @click="closeFlyBasket" class="flybasket__shadow"></div>
    <div class="flybasket__wrapper">
      <div class="flybasket__header">Корзина</div>
      <div class="flybasket__body">
        <div v-for="cartItem in cart" :key="cartItem.id" class="basket-item">
          <div class="basket-item__row">
            <div class="basket-item__image">
              <img :src="cartItem.image" alt="" />
            </div>
            <div class="basket-item__content">
              <div class="basket-item__title">{{ cartItem.name }}</div>
              <div class="basket-item__value">{{ cartItem.title }}</div>
            </div>
            <button class="basket-item__button">
              <svg class="basket-item__icon">
                <use href="../assets/sprite.svg#icon-cross"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="flybasket__footer">
        <ul class="flybasket__list">
          <li class="flybasket__option">
            <div class="flybasket__option-label">Итого:</div>
            <div class="flybasket__option-value">21 498 руб.</div>
          </li>
          <li class="flybasket__option">
            <div class="flybasket__option-label">Налог 5%:</div>
            <div class="flybasket__option-value">1074 руб.</div>
          </li>
        </ul>
        <button class="flybasket__button flybasket__button--full-width">
          Оформить заказ
          <svg>
            <use href="../assets/sprite.svg#icon-forward"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flybasket {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 3;
}

.flybasket__shadow {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.5;
  background: #000;
}

.flybasket__wrapper {
  position: relative;
  z-index: 1;
  width: 385px;
  background: #fff;
  height: 100%;
  margin-left: auto;
  box-shadow: -10px 4px 24px 0px rgba(0, 0, 0, 0.1);
  padding: 32px 0 32px 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.flybasket__header,
.flybasket__body,
.flybasket__footer {
  padding-right: 32px;
}
.flybasket__header {
  color: #000;
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 30px;
}
.flybasket__footer {
  margin-top: auto;
}
.flybasket__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.flybasket__option {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.flybasket__option + .flybasket__option {
  margin-top: 20px;
}
.flybasket__option::before {
  content: '';
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 3px;
  border: 1px dashed #dfdfdf;
}
.flybasket__option-label,
.flybasket__option-value {
  position: relative;
  background-color: #fff;
}

.flybasket__button {
  position: relative;
  margin-top: 24px;
  height: 55px;
  flex-shrink: 0;
  color: #fff;
  border: 0;
  outline: 0;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 18px;
  background: #9dd458;
}
.flybasket__button--full-width svg {
  position: absolute;
  top: 50%;
  height: 12px;
  width: 14px;
  transform: translateY(-50%);
  right: 32px;
  stroke: #fff;
}
.flybasket__button--full-width {
  width: 100%;
}
.basket-item__icon {
  width: 10px;
  height: 10px;
  fill: #b5b5b5;
  stroke: #b5b5b5;
}
.basket-item__button {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #b5b5b5;
}
</style>
