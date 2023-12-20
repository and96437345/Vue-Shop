<script setup>
import CatalogItem from './Catalog-item.vue'
</script>

<template>
  <div class="catalog">
    <div class="catalog__header">
      <div class="catalog__name">Все кроссовки</div>
      <div class="catalog__find">
        <button class="catalog__find-btn">
          <svg class="find__icon">
            <use href="../assets/sprite.svg#icon-find"></use>
          </svg>
        </button>
        <input type="text" class="catalog__find-input" placeholder="Поиск..." />
      </div>
    </div>
    <div class="catalog__card-row">
      <div v-for="product in products" :key="product.id" class="catalog__items">
        <CatalogItem />
      </div>
    </div>
  </div>
</template>
